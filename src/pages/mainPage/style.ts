import styled from  "styled-components"
import { MainBodyBackground, gradientPrimaryColor, gradientSecondColor, searchInputColor, searchPlaceHolderColor } from "../../config/constants"

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
    font-weight: 500;
    font-size:24px;
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
padding: 0 25px;
.foto{
    margin-right:14%;
}
.nome{
    margin-right:20%;
}
.cargo {
    margin-right:14%;
}
.data{
    margin-right:10%;
}
`
