import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './components/layout'
import { BrowserRouter, Routes, Route } from "react-router";
import { QRGeneration } from "./components/QRGenerator/QRGeneration"
import { QRSkaner } from "./components/QRSkaner/QRSkaner"
import { Nav } from "./components/Nav/Nav"
import { HistoriGenerator } from "./components/HistoriGenerotor/HistoriGenerator"
import { HistoriSkaner } from "./components/HistoriSkaner/HistoriSkaner"



ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)