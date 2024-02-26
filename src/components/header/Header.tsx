import { Container } from "./style";
import logo from "../../assets/Logo.svg"
export default function Header(){
    return (
       <Container>
        <img src={logo} alt="" />
       </Container>
    )
}