import React from 'react';
import {createBrowserRouter,Navigate }  from 'react-router-dom'
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Categories from '../Pages/Home/Category/Categories';
import NewsLayout from '../Layout/NewsLayout';
import News from '../Pages/Home/News/News/News';
import LoginLayout from '../Layout/LoginLayout';
import Login from '../Pages/Login/Login/Login';
import Register from '../Pages/Login/Register/Register';


const Router = createBrowserRouter([

    {
        path: '/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element:<Navigate to="/category/0"></Navigate>
            }
            ,
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]

    },
    {
        path: 'category',
        element:<Main></Main>,
        children:[
            {
                path:':id',
                element:<Categories></Categories>,
                loader: ({params})=>fetch(`http://localhost:5000/category/${params.id}`)
                
            }
        ]
    },
    {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element: <News></News>,
                loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
                
            }

        ]
    }
])
export default Router;