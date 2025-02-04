import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import { Home } from '../pages/Home'

export default function Routing () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <PublicLayout /> }>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}