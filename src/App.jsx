import { useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Base from "./layout/Base"
import Home from "./pages/Home"
import AddClient from "./pages/AddClient"
import EditClient from "./pages/EditClient"
import InspectClient from "./pages/InspectClient"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clients" element={<Base />}>
          <Route index element={<Home />} />
          <Route path="add" element={<AddClient />} />
          <Route path="edit/:id" element={<EditClient />} />
          <Route path=":id" element={<InspectClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
