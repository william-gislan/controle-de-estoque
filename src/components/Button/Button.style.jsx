import styled from "styled-components";
import { themes } from "../../themes";

export const ButtonForm = styled.button`
    background-color: ${({theme}) =>  themes.buttonColor.primary };
    height: 30px;
    padding: 10px;
    border: 0;
    position: relative;
    top: 200px;
    right: 730px;
    cursor: pointer;
`