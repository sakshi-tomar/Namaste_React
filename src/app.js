
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutRoute from "./components/About";
import ContactRoute from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";

const AppLayout = ()=>{
   
    return (
        <div id="app">
            <Header/>
            <Outlet/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element :<AppLayout/>,
        children: [
            {
                path:"/about",
                element :<AboutRoute/>
            },
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/contact",
                element :<ContactRoute/>
            },
        ],
        errorElement: <Error/>
    },
    
])
const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);