import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '@suiet/wallet-kit/style.css';
import './suiet-wallet-kit-custom.css'
import Header from "./Header";
import {WalletProvider} from "@suiet/wallet-kit";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <WalletProvider>
            <Header/>
            <App/>
        </WalletProvider>
    </React.StrictMode>,
);
