import { QRGeneration } from "./QRGenerator/QRGeneration"
import { QRSkaner } from "./QRSkaner/QRSkaner"
import { Nav } from "./Nav/Nav"
import { HistoriGenerator } from "./HistoriGenerotor/HistoriGenerator"
import { HistoriSkaner } from "./HistoriSkaner/HistoriSkaner"
import { Footer } from "./Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router";
import "./layout.css"


export const Layout = () => {
    return (
        <div className="layout">
            <Nav />
            <Routes>
                <Route path="" element={<QRGeneration />} />
                <Route path="/gener" element={<QRGeneration />} />
                <Route path="/skan" element={<QRSkaner />} />
                <Route path="/hisgen" element={<HistoriGenerator />} />
                <Route path="/hisskan" element={<HistoriSkaner />} />
            </Routes>
            <Footer />
        </div>
    )
}

