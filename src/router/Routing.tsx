import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import { Home } from '../pages/Home'
import Nosotros from '../pages/Nosotros'
import Proyectos from '../pages/Proyectos'
import Contacto from '../pages/Contacto'

export default function Routing () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <PublicLayout /> }>
          <Route index element={<Home />} />
          <Route path='nosotros' element={<Nosotros />} />
          <Route path='proyectos' element={<Proyectos />} />
          <Route path='contacto' element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}