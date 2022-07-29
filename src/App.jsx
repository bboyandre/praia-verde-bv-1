// import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Start from './Pages/Start'
import Praias from './Pages/Praias'
import Praia from './Pages/Praia'
import Mapa from './Pages/Mapa'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/praias" element={<Praias />} />
        <Route path="/praia" element={<Praia />} />
        <Route path="/mapa" element={<Mapa />} />
      </Routes>
    </BrowserRouter>    
  )
}

export default App
