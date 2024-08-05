import styled from "styled-components";
import { themes } from "../../themes";

export const Section = styled.section `
    background-color: ${({theme}) => themes.backgroundColor.primary};
    width: 100%;
    padding: 2rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
   
`

export const Form = styled.form `
    display: flex;
    width: 50%;
    position: relative;
    top: 100px;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 0 auto;
`
export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`
