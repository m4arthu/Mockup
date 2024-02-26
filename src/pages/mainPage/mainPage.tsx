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
        <h2 className="foto">FOTO</h2>
        <h2 className="nome">NOME</h2>
        <h2 className="cargo">CARGO</h2>
        <h2 className="data">DATA DE ADMISSÂO</h2>
        <h2 className="telefone">TELEFONE</h2>
        </TableHeader>
      </Table>
    </Container>
    </>
  )
}