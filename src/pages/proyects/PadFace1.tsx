import ProyectLayout from '../../layouts/ProyectLayout'
import { albumProyect1 } from '../../libs/albumsProyects'
import Cliente1 from '../../assets/images/clientes/cliente1.webp'

export default function PadFace1() {
  return (
    <ProyectLayout
      ubicacion='Arequipa Perú'
      fecha='2019'
      cliente='Coansa del Perú SAC'
      propietario='Minera Cerro Verde'
      logo={Cliente1}
      url={albumProyect1}
      titulo='Instalación de Geomembrana, GCL y Geocompuesto en PAD Fase III'
    />
  )
}
