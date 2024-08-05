import styled from "styled-components";
import { themes } from "../../themes";

export const Container = styled.section`
    width: 100%;
    padding: 2rem;
    min-height:100vh;
    background-color: ${({theme}) => themes.backgroundColor.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  
`

export const Content = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    
`
export const InformationItems = styled.div`
    width: 20%;
    height: 200px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: ${({theme}) => themes.backgroundColor.secundary};
    border-radius: 5px;
    padding: 1rem;
`