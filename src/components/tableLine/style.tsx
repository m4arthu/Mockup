import styled from "styled-components";
import { tableLineBorderColor } from "../../config/constants";

export const  TableLineContainer = styled.div`
height:49px;
border-top:inherit;
border: 1px solid ${tableLineBorderColor};
padding: 0 25px;
background-color:white;
display:flex;
align-items:center;
justify-content:left;
h3{
    font-weight:400,
    font-size:16px;
}
.img{
    img{
        width:34px;
        height:34px;
        border-radius:100%;
    } 
    width:18%;
}
.name{
    width:25%;
}
.cargo{
    width:21%;
}
.date{
    width:25%;
}
.vector{
    display:none;
}
@media(max-width:650px){
    padding: 0 15px;
    .vector{
        display:block;
    }
    .name{
        display:flex;
        justify-content:center;
        width:100%;
    }
    .img{
        width:inherit;
    }
    .cargo{
        display:none;
    }
    .date{
        display:none;
    }
    .telefone{
        display:none;
    }
}
`