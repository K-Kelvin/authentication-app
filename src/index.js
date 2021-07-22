import React from "react";
import ReactDOM from "react-dom";

import "./utils/init";
import AuthProvider from "./context/firebase";
import UserProvider from "./context/user";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./styles/tailwind.css";

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
