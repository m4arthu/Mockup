import {gradientPrimaryColor,gradientSecondColor} from  "../../config/constants"
import styled from "styled-components"


export const TableHeader = styled.div` 
background-image: linear-gradient(to bottom, ${gradientPrimaryColor},${gradientSecondColor});
height:47px;
border-radius:8px 8px 0 0;
color:white;
font-weigth:500;
font-size:16px;
display:flex;
align-items:center;
justify-content:left;
padding: 0 25px;
.point{
    display:none
}
.foto{
    width:15%;
}
.nome{
    width:22%;
}
.cargo{
    width:19%;
}
.data{
    width:25%;
}

@media(max-width:650px){
    justify-content:space-between;
    .point{
        display:block;
    }
    div{
        width:100%;
    }
    .cargo{
        display:none;
    }
    .telefone{
        display:none;
    }
    .data{
        display:none;
    }
}
`