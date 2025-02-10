import ProyectLayout from '../../layouts/ProyectLayout'
import { albumProyect2 } from '../../libs/albumsProyects'
import Cliente2 from '../../assets/images/clientes/cliente2.webp'

export default function PadFace2() {
  return (
    <ProyectLayout
      url={albumProyect2}
      titulo='Impermeabilización de Posas para Cosecha de Agua'
      cliente='Foncreagro SA'
      propietario='Minera Yanacocha'
      ubicacion='Cajamarca Perú'
      fecha='2020'
      logo={Cliente2}
    />
  )
}
