import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";

const el = document.getElementById("app");
const root = createRoot(el);

root.render( <App/> );