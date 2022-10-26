import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../Context/PrivateRoute/PrivateRoute";
import Error from "../Error/Error";
import Main from "../LayOut/Main";
import Blog from "../pages/Blog/Blog";
import Category from "../pages/Category/Category";
import Course from "../pages/Course/Course";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Tutorial from "../pages/Tutorial/Tutorial";


export const routes = createBrowserRouter([
    {
        path:'*',
        element: <Error></Error>,
        errorElement:<Error></Error>
      },
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
               loader : ({params})=> fetch(`http://localhost:5000/tutorials/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/course',
                element: <PrivateRoute><Course></Course></PrivateRoute>
            }
        ]
    }
])