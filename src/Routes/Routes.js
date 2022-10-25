import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import About from "../pages/About/About";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/tutorials')
            },
            {
                path: '/category/:id',
                element : <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])