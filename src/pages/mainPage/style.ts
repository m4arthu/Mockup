import styled from  "styled-components"
import { MainBodyBackground, gradientPrimaryColor, gradientSecondColor, searchInputColor, searchPlaceHolderColor, serachContainerH1 } from "../../config/constants"

export const Container = styled.div`
font-family: "Roboto", sans-serif;
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:${MainBodyBackground};
flex-direction:column;
`

export const Table = styled.div`
width:80%;
`

export const SearchContainer = styled.div`
display:flex;
justify-content:space-between;
width:80%;
margin-top:50px;
margin-bottom:50px;
align-items:end;
position:relative;
.searchIcon{
    position:absolute;
    right:10px;
    bottom:10px;
}
input{
    background:white;
    padding-left:10px;
    width:287px;
    height:48px;
    border: 1px solid ${searchInputColor};
    border-radius:8px ;
}
input::placeholder{
    color:${searchPlaceHolderColor};
    font-weight:regular;
    font-size:16px;
}
input:focus {
    outline: none;
    box-shadow: none;
  }
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
  display: none;
}
h1{
    color: ${serachContainerH1};
    font-weight: 500;
    font-size:24px;
}

@media(max-width:650px){
    flex-direction:column;
    align-items:start;
    margin-top:20px;
    margin-bottom:15px;
    input{
        margin-top:20px;
        width:100%;
    }
}

`
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
    width:17%;
}
.nome{
    width:24%;
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
