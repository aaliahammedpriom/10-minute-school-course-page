import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/Routes";
import "./index.css"
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </AuthProvider>
);