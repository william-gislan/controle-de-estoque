import { useState } from "react";
import { ContainerInput, Form, Section } from "./ProductRegesistration.style";
import { ButtonForm } from "../../components/Button/Button.style";

export default function ProdutctRegistrationd(){
    const [products, setProducts] = useState(() => {
        const localStorageProducts = localStorage.getItem("Products");
        if(!localStorageProducts){
            return [];
        } else{
            return JSON.parse(localStorageProducts);
        }
    });
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [descritpion, setDescription] = useState("");
    const date = new Date();
    const day = date.getDate();


    const addNewProduct = ({ name, quantity, price, category, descritpion, date, day}) => {
        const id = products.length + 1;
        const product = ({id, name, quantity, price, category, descritpion, date, day})
        setProducts((state) => {
            const newProduct = [...state, product];
            localStorage.setItem("Products", JSON.stringify(newProduct));
            return newProduct;
        });
        console.log(products);
    };

    const createNewProduct = (ev) => {
        ev.preventDefault();
        addNewProduct({name, quantity, price, category, descritpion, date, day});
        alert("Produto cadastrado com sucesso");
        setName("");
        setCategory("");
        setDescription("");
        setPrice("");
        setQuantity("");
    };
    return(
        <Section>
            <h1>Stock Item</h1>
            <Form onSubmit={createNewProduct}>
                <ContainerInput>
                    <label>Nome</label>
                    <input type="text" value={name} onChange={(n) => setName(n.target.value) }/>
                </ContainerInput>
                <ContainerInput>
                    <label>Quantidade</label>
                    <input type="number" value={quantity} onChange={(q) => setQuantity(q.target.value) }/>
                </ContainerInput>
                <ContainerInput>
                    <label>Preço</label>
                    <input type="number" value={price} onChange={(p) => setPrice(p.target.value) }/>
                </ContainerInput>
               <ContainerInput>
                    <label>Categoria</label>
                    <select name="select" value={category} onChange={c => setCategory(c.target.value)}>
                        <option value="electronics">Eletronico</option>
                        <option value="apparel">Vestuário</option>
                        <option value="ultilidades">Ultilidades</option>
                    </select>
               </ContainerInput>
               <ContainerInput>
                    <label htmlFor="description"> Descrição</label>
                    <textarea name="description" id="description" rows={10} cols={100} value={descritpion} onChange={(d) => setDescription(d.target.value)}></textarea>
               </ContainerInput>
               <ButtonForm type="submit">Salvar</ButtonForm>
            </Form>
        </Section>
    );

};