import {TableHeader} from './style.ts'
import Elipse from "../../assets/Ellipse 1.svg"
export default function TableHeaderComponent() {
    return (
        <TableHeader>
        <h2 className="foto">FOTO</h2>
        <h2 className="nome">NOME</h2>
        <h2 className="cargo">CARGO</h2>
        <h2 className="data">DATA DE ADMISSÂO</h2>
        <h2 className="telefone">TELEFONE</h2>
        <img src={Elipse} className="point" />
      </TableHeader>
    )
}