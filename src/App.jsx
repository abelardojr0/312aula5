import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cursos from "./pages/Cursos"
import Contato from "./pages/Contato"
import Menu from "./pages/Menu"

function App() {

  return (
    <>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<Home/>} />    
          <Route path="cursos" element={<Cursos/>} />    
          <Route path="contato" element={<Contato/>} />    
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
