import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import loadStorageProduct from "../../hooks/loadStorageProducts";

export default function ItensInStock(){
    
    const {products} = loadStorageProduct();
    
    return(
        <>
        <Table style={{width:'740px', height:'auto', border:'0px'}}>
           <TableHead style={{backgroundColor:' #242323'}}>
               <TableRow style={{backgroundColor:' #242323'}} >
                   <TableCell style={{color:'white', border:0}}>ID</TableCell>
                   <TableCell style={{color:'white', border:0}}>Nome</TableCell>
                   <TableCell style={{color:'white', border:0}}>Em estoque</TableCell>
                   <TableCell style={{color:'white', border:0}}>Categoria</TableCell>
                   <TableCell style={{color:'white', border:0}}>Ações</TableCell>
               </TableRow>
           </TableHead>
           <TableBody>
              {
                products.map(row => {
                       return(
                           <TableRow key={row.id}>
                           <TableCell style={{color:'white', border:0}}>{row.id}</TableCell>
                           <TableCell style={{color:'white', border:0}}>{row.name}</TableCell>
                           <TableCell style={{color:'white', border:0}}>{row.quantity}</TableCell>
                           <TableCell style={{color:'white', border:0}}>{row.category}</TableCell>
                           <TableCell style={{border:0}}>
                              <button style={{color:'black', padding:'5px'}}>Ver</button>
                              <button style={{color:'black', padding:'5px'}}>Ver</button>
                              <button style={{color:'black', padding:'5px'}}>Ver</button>
                           </TableCell>
                           </TableRow>
                       );  
                })
              }
           </TableBody>
       </Table>
   </>
    );
};