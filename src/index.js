import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
//import {Coffe} from './components/Coffe';
import { Usuarios } from "./components/Usuarios";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Usuarios
      nombre="Giovany"
      edad={33}
      direccion={{ calle: "Norte 7", ciudad: "CDMX", pais: "México" }}
    />
  </React.StrictMode>
);
