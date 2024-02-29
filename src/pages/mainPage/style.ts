import styled from  "styled-components"
import { MainBodyBackground, gradientPrimaryColor, gradientSecondColor, searchInputColor, searchPlaceHolderColor, serachContainerH1 } from "../../config/constants"

export const Container = styled.div`
font-family: "Roboto", sans-serif;
width:100vw;
height:110vh;
display:flex;
align-items:center;
background-color:${MainBodyBackground};
flex-direction:column;
`

export const Table = styled.div`
width:80%;
padding-bottom:20px;
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

