import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Blog from "../pages/Blog/Blog";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
import Tutorial from "../pages/Tutorial/Tutorial";


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
                path: '/tutorials/:id',
                element: <Tutorial></Tutorial>,
               loader : ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])