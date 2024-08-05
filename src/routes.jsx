import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./screens/dashboard/Dashboard";
import ProdutctRegistrationd from "./screens/productRegistration/ProductRegistration";
import ItensInStock from "./screens/itensInStock/ItensInStock";



export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Dashboard />
    },
    {
        path:'/productRegistration',
        element: <ProdutctRegistrationd />
    },
    {
        path:'/itensinstock',
        element: <ItensInStock />
    }
]);