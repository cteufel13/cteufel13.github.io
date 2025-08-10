import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import RP4B from './projects/RP4B.jsx'
import SPD from './projects/SPD.jsx'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";




createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/RP4B" element={<RP4B />} />
      <Route path="/SPD" element={<SPD />} />
    </Routes>

  </BrowserRouter>
)
