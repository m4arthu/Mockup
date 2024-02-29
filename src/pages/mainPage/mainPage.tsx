import Header from "../../components/header/Header"
import { Container, Table, SearchContainer} from "./style"
import searchIcon from "../../assets/Search.svg"
import TableLine from "../../components/tableLine/tableLine"
import { useEffect, useRef, useState } from "react"
import { getEmployees } from "../../services/employees"
import { GetEmployees } from "../../helpers"
import TableHeaderComponent from "../../components/tableHeader/tableHeader"

export default function MainPage() {
  const [employees, setEmplpyees] = useState<GetEmployees[]>([])
  const searchTerm = useRef<HTMLInputElement>(null)
  useEffect(() => {
    getEmployeesFunction()
  }, [])
  if (employees.length === 0) {
    return <>Loading...</>
  }
  async function getEmployeesFunction (){
    try{
      const employees = await getEmployees()
      setEmplpyees(employees.data)
    }catch(e){
      alert("algo deu errado  ao buscar os dados da api verifique se a ela esta rodando na porta 3000")
    }

  }
  async function  search() {
    await getEmployeesFunction()
    const term = searchTerm.current?.value
    if (term) {
      var findInEmplyees = employees.filter((value) => value.name.toLowerCase().includes(term.toLowerCase()))
      if (findInEmplyees.length === 0) {
        findInEmplyees = employees.filter((value) => value.job.toLowerCase().includes(term.toLowerCase()))
      }
      if (findInEmplyees.length === 0) {
        findInEmplyees = employees.filter((value) => value.phone.toLowerCase().includes(term.toLowerCase()))
      }
      if (findInEmplyees.length === 0) {
        alert("nada encontrado")
        getEmployeesFunction()
      } else {
        console.log(findInEmplyees)
        setEmplpyees([...findInEmplyees])
      }
    } else {
      alert("nenhum termo pesquisado !!")
      getEmployeesFunction()
    }
  }

  return (
    <>
      <Header />
      <Container>
        <SearchContainer>
          <h1>Funcionários</h1>
          <input ref={searchTerm}  onKeyDown={(e)=>{
            if(e.key === "Enter"){
              e.preventDefault();
              search()
            }
          }} placeholder="Pesquisar" type="search" />
          <img onClick={search} src={searchIcon} alt="" className="searchIcon" />
        </SearchContainer>
        <Table>
          <TableHeaderComponent/>
          {employees.map((data) => {
            return <TableLine key={data.id} data={data} />
          })
          }
        </Table>
      </Container>
    </>
  )
}