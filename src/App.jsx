import { RouterProvider } from "react-router-dom"
import { routes } from "./routes"


function App() {
 
  return (
    <RouterProvider router={routes} />
  )
}

export default App

//criei o hook para carregar a lista de produtos do localstorage e a tabela, falta criar um componente de tabele com as props