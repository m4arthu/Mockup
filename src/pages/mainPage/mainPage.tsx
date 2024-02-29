import Header from "../../components/header/Header"
import { Container, Table, SearchContainer, TableHeader } from "./style"
import searchIcon from "../../assets/Search.svg"
import TableLine from "../../components/tableLine/tableLine"
import { useEffect, useRef, useState } from "react"
import { getEmployees } from "../../services/employees"
import { GetEmployees } from "../../helpers"
import Elipse from "../../assets/Ellipse 1.svg"
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
    const employees = await getEmployees()
    setEmplpyees(employees.data)
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
        getEmployeesFunction()
      } else {
        console.log(findInEmplyees)
        setEmplpyees([...findInEmplyees])
      }
    } else {
      alert("nada encontrado")
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
          <TableHeader>
            <h2 className="foto">FOTO</h2>
            <h2 className="nome">NOME</h2>
            <h2 className="cargo">CARGO</h2>
            <h2 className="data">DATA DE ADMISSÂO</h2>
            <h2 className="telefone">TELEFONE</h2>
            <img src={Elipse} className="point" />
          </TableHeader>
          {employees.map((data) => {
            return <TableLine key={data.id} data={data} />
          })
          }
        </Table>
      </Container>
    </>
  )
}