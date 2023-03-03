import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './suiet-wallet-kit-custom.css'
import Header from "./Header";
import {WalletProvider} from "@suiet/wallet-kit";
import Footer from "./Footer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Profile from "./Profile";
import Collection from "./Collection";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/profile",
        element: <Profile/>,
    },
    {
        path: "/collection",
        element: <Collection/>,
    },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <WalletProvider>
            <div className="min-h-screen flex flex-col">
                <Header />
                <RouterProvider router={router} />
                <Footer/>
            </div>
        </WalletProvider>
    </React.StrictMode>,
);
