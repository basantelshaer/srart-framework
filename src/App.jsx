import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Layout from "./Pages/Layout/Layout.jsx"
import Home from "./Pages/Home/Home.jsx"
import About from "./Pages/About/About.jsx"
import Contact from "./Pages/Contact/Contact.jsx"
import Portfolio from "./Pages/Portfolio/Portfolio.jsx"

function App() {
   const router=createBrowserRouter([
    {path:"/",element:<Layout/>,
    children:[
    {path:"",element:<Home/>},
    {path:"home",element:<Home/>},
    {path:"about",element:<About/>},
    {path:"contact",element:<Contact/>},
    {path:"portfolio",element:<Portfolio/>},
    ]
    }
  ])
  return <>
    <RouterProvider router={router}/>
    </>
}
export default App
