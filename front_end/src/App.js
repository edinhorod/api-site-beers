import React from "react";
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./Routes";
import "./styles/global";

export function App() {

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}