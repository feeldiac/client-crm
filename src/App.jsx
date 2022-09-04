import { useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./layout/Login"
import Base from "./layout/Base"
import Home from "./pages/Home"
import LoginForm from "./pages/LoginForm"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <h1 className="text-xl font-extrabold">Hello world</h1> */}
        <Route path="/" element={<Login />}>
          <Route index element={<LoginForm />} />
        </Route>

        <Route path="/clients" element={<Base />}>
          <Route index element={<Home />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
