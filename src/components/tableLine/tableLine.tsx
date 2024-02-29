import { TibleLineProps } from "../../helpers";
import { TableLineContainer } from "./style";
import vector from "../../assets/Vector.svg"
import { useState } from "react";
export default function TableLine({ data }: TibleLineProps) {
    const [opened, setopened] = useState(false)
    function convertDate(dateString: string) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    function formatPhoneNumber(number:string) {
          return `+${number.slice(0, 2)} (${number.slice(2, 4)}) ${number.slice(4, 7)}-${number.slice(7, 11)}-${number.slice(11, 13)}`;
      }

    function open() {
        if (opened) {
            setopened(false)
        } else {
            setopened(true)
        }
    }
    return (
        <>
            <TableLineContainer>
                <div className="content">
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
                        <h3>{formatPhoneNumber(data.phone)}</h3>
                    </div>
                    {opened ?<img src={vector} onClick={open} className="vector rotated" alt="" /> :
                     <img src={vector} onClick={open} className="vector" alt="" />    
                    }
                </div>
                {opened ? <div className="details">
                    <div className="content">
                        <h2>Cargo</h2>
                        <p>{data.job}</p>
                    </div>
                    <div className="content">
                        <h2>Data de admissão</h2>
                        <p>{convertDate(data.admission_date)}</p>
                    </div>
                    <div className="content">
                        <h2>Telefone</h2>
                        <p>{formatPhoneNumber(data.phone)}</p>
                    </div>
                </div> : ""}
            </TableLineContainer>
        </>
    )
}