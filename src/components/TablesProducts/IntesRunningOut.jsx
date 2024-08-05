import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import loadStorageProduct from "../../hooks/loadStorageProducts";



export default function ItensRunningOut(){
    const {products} = loadStorageProduct();


    return(
        <>
             <Table style={{width:'740px', height:'auto', border:'0px'}}>
                <TableHead style={{backgroundColor:' #242323'}}>
                    <TableRow style={{backgroundColor:' #242323'}} >
                        <TableCell style={{color:'white', border:0}}>Itens Acabando</TableCell>
                        <TableCell style={{color:'white', border:0}}>Qtd.</TableCell>
                        <TableCell style={{color:'white', border:0}}>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                   {
                     products.map(row => {
        
                        if(row.quantity <= 5){
                            return(
                                <TableRow key={row.id}>
                                <TableCell style={{color:'white', border:0}}>{row.name}</TableCell>
                                <TableCell style={{color:'white', border:0}}>{row.quantity}</TableCell>
                                <TableCell style={{border:0}}>
                                   <button style={{color:'black', padding:'5px'}}>Ver</button>
                                </TableCell>
                                </TableRow>
                            );
                        }
                     })
                   }
                </TableBody>
            </Table>
        </>
    );
}