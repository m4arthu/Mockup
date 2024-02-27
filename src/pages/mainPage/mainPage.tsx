import Header from "../../components/header/Header"
import { Container, Table, SearchContainer, TableHeader } from "./style"
import searchIcon  from "../../assets/Search.svg"
import TableLine from "../../components/tableLine/tableLine"
import { useEffect, useState } from "react"
import { getEmployees } from "../../services/employees"
import { GetEmployees } from "../../helpers"
import Elipse from "../../assets/Ellipse 1.svg"
export default function MainPage(){
  const [employees,setEmplpyees] = useState<GetEmployees[]>([])
  useEffect(()=>{
    (async ()=>{
      const employees = await getEmployees()
      setEmplpyees(employees.data)
    })()
  })
  if(employees.length === 0){
    return <>Loading...</>
  }
  return (
    <>
    <Header/>
    <Container>
      <SearchContainer>
        <h1>Funcionários</h1>
        <input placeholder="Pesquisar" type="search" ></input>
        <img src={searchIcon} alt="" className="searchIcon"/>
      </SearchContainer>
      <Table>
        <TableHeader>
        <h2 className="foto">FOTO</h2>
        <h2 className="nome">NOME</h2>
        <h2 className="cargo">CARGO</h2>
        <h2 className="data">DATA DE ADMISSÂO</h2>
        <h2 className="telefone">TELEFONE</h2>
        <img src={Elipse} className="point"/>
        </TableHeader>
        { employees.map((data)=>{
           return <TableLine key={data.id} data={data}/>
        })
        }
      </Table>
    </Container>
    </>
  )
}