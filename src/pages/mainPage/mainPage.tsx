import Header from "../../components/header/Header"
import { Container, Table, SearchContainer, TableHeader } from "./style"
import searchIcon  from "../../assets/Search.svg"
export default function MainPage(){
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

        <>adw</>
        </TableHeader>
      </Table>
    </Container>
    </>
  )
}