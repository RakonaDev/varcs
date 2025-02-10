import ProyectLayout from "../../layouts/ProyectLayout";
import { albumProyect6 } from "../../libs/albumsProyects";
import Cliente4 from "../../assets/images/clientes/cliente4.webp";

export default function DepositoRelaves2() {
  return (
    <ProyectLayout 
      url={albumProyect6}
      titulo="Instalación de Geomembrana en el Depósito de Relaves"
      cliente="Consorcio Minero Sunec"
      propietario="Consorcio Minero Sunec"
      ubicacion="Cerro de Pasco"
      fecha="2024"
      logo={Cliente4}
    />
  )
}
