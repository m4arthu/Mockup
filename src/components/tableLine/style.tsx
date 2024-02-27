import styled from "styled-components";
import { searchInputColor, tableLineBorderColor } from "../../config/constants";

export const TableLineContainer = styled.div`
border: 1px solid ${tableLineBorderColor};
background-color:white;
.content{
width:80%;
height:49px;
border-top:inherit;
width:100%;
display:flex;
align-items:center;
justify-content:left;
}
h3{
    font-weight:400,
    font-size:16px;
}
.img{
    img{
        margin-left:15px;
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
.telefone{
    margin-right:15px;
}
.vector{
    display:none;
}
.details{
    display:none;
}
@media(max-width:650px){
    .details{
        display:block;
    }
    padding: 0 10px;
    font-size:16px;
    .details{
        margin-top:20px;
       .content{
          margin
          h2{
            font-weight:500;
            }
          p{
             font-weight:400;
           }
           display:flex;
          justify-content:space-between;
          margin-bottom:10px;
          height:100%;
          border-bottom: 3px dotted ${searchInputColor};
        }
   }
    .vector{
        display:block;
        margin-right:10px;
    }
    .name{
        display:flex;
        justify-content:center;
        width:100%;
    }
    .img{
        width:34px;
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