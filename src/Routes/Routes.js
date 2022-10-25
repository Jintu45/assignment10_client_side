import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    }
])