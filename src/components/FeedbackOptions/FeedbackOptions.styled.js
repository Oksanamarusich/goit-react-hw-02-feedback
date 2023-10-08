import styled from "styled-components";

export const Button = styled.button`
margin-right:40px;
padding:8px;

width: 100px;
border-radius: 10px;
border: 1px solid green;
background-color: green;
color: white;
cursor:pointer;

&:hover{
 background-color: grey;   
}
`

export const ButtonContainer = styled.ul`
display:flex;

`
export const ListItem = styled.ul`
list-style: none;
`