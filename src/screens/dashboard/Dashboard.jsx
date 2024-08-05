import { useEffect, useState } from "react";
import { TitleH6 } from "../../components/Titles/Titles.style";
import { Container, Content, InformationItems } from "./Dashboard.style";
import loadStorageProduct from "../../hooks/loadStorageProducts";
import RecentsItens from "../../components/TablesProducts/RecentItens";
import ItensRunningOut from "../../components/TablesProducts/IntesRunningOut";

export default function Dashboard(){
    const {products} = loadStorageProduct();

    
    let quantyTotalItems = 0;
    const date = new Date();
    const currentDay = date.getDate();
    let differenceDays = 0;
    let quantityDays = 0;
    let productRunningOut = 0;
    

    products.map(product => {//logica para o total de itens no estoque
       quantyTotalItems += +product.quantity;
    });

    products.map(product => {//logica para sabe os produtos cadastrados nos ultimos 10 dias
        differenceDays = currentDay - product.day;
         if(differenceDays <= 10){
            quantityDays++;
         };
     });

     
     products.map(product => {//logica para os produtos que estão acabando
         if(product.quantity <= 5){
            productRunningOut++;
         };
     });
    

    return(
        <Container>
            <h2>Dashboard</h2>
            <Content>
                <InformationItems>
                    <TitleH6>Diversidade de Itens</TitleH6>
                    <p></p>
                </InformationItems>
                <InformationItems>
                    <TitleH6>Inventário Total</TitleH6>
                    <p>{quantyTotalItems}</p>
                </InformationItems>
                <InformationItems>
                    <TitleH6>Itens Recentes</TitleH6>
                    <p>{quantityDays}</p>
                </InformationItems>
                <InformationItems>
                    <TitleH6>Itens Acabando</TitleH6>
                    <p>{productRunningOut}</p>
                </InformationItems> 
            </Content>
            <Content>
               <RecentsItens />
               <ItensRunningOut/>
            </Content>
            
        </Container>
    );
};