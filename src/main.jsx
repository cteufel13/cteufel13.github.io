import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import RP4B from './projects/RP4B.jsx'
import SPD from './projects/SPD.jsx'
import RiskNeutralHedging from './projects/RiskNeutralHedging.jsx'
import AceDB from './projects/AceDB.jsx'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./utils.jsx";



createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
    <ScrollToTop />

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/RP4B" element={<RP4B />} />
      <Route path="/SPD" element={<SPD />} />
      <Route path="/RiskNeutralHedging" element={<RiskNeutralHedging />} />
      <Route path="/AceDB" element={<AceDB />} />
    </Routes>

  </BrowserRouter>
)
