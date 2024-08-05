import { useState } from "react";

export default function loadStorageProduct(){
    const [products, setProducts] = useState(() => {
        const productList = localStorage.getItem("Products");
        if(!productList){
            return [];
        } else{
            return JSON.parse(productList);
        };
    });

    return{products}
};