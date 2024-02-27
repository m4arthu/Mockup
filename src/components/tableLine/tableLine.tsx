import { TibleLineProps } from "../../helpers";
import { TableLineContainer } from "./style";

export default function TableLine({ data }: TibleLineProps) {
    function convertDate(dateString: string) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    return (
        <TableLineContainer>
            <div className="img">
                <img src={data.image} alt="" />
            </div>
            <div className="name">
                <h3>{data.name}</h3>
            </div>
            <div className="cargo">
                <h3>{data.job}</h3>
            </div>
            <div className="date">
                <h3>{convertDate(data.admission_date)}</h3>
            </div>
            <div className="telefone">
                <h3>{data.phone}</h3>
            </div>
        </TableLineContainer>
    )
}