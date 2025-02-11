import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import { Home } from '../pages/Home'
import Nosotros from '../pages/Nosotros'
import Proyectos from '../pages/Proyectos'
import Contacto from '../pages/Contacto'
import PadFace1 from '../pages/proyects/PadFace1'
import PadFace2 from '../pages/proyects/PadFace2'
import ImpermeabilizacionPozasPETAR from '../pages/proyects/ImpermeabilizacionPoszasPETAR'
import ImpermeabilizacionPozas from '../pages/proyects/ImpermeabilizacionPozas'
import DepositoRelaves from '../pages/proyects/DepositoRelaves'
import DepositoRelaves2 from '../pages/proyects/DepositoRelaves2'

export default function Routing () {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path='/' element={ <PublicLayout /> }>
          <Route index element={<Home />} />
          <Route path='nosotros' element={<Nosotros />} />
          <Route path='proyectos' element={<Proyectos />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='proyectos/1' element={ <PadFace1 />} />
          <Route path='proyectos/2' element={ <PadFace2 />} />
          <Route path='proyectos/3' element={ <ImpermeabilizacionPozasPETAR /> } />
          <Route path='proyectos/4' element={ <ImpermeabilizacionPozas /> } />
          <Route path='proyectos/5' element={ <DepositoRelaves /> } />
          <Route path='proyectos/6' element={ <DepositoRelaves2 /> } />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}