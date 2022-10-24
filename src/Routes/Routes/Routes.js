import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import News from "../../Pages/News/News";
import Profile from "../../Pages/others/Profile/Profile";
import TermsAndConditions from "../../Pages/others/TermsAndConditions/TermsAndConditions";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://dragon-news-server-omega-tawny.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://dragon-news-server-omega-tawny.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://dragon-news-server-omega-tawny.vercel.app/news/${params.id}`)
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
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: 'profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
]);