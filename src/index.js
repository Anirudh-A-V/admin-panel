import React from "react";
import ReactDOM from "react-dom/client";
import { registerLicense } from '@syncfusion/ej2-base';

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

// Registering Syncfusion license key
registerLicense(process.env.REACT_APP_SYNCFUSION_LICENSE_KEY);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ContextProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ContextProvider>
);
