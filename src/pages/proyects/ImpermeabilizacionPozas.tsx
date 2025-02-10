import ProyectLayout from "../../layouts/ProyectLayout";
import { albumProyect4 } from "../../libs/albumsProyects";
import Cliente3 from "../../assets/images/clientes/cliente3.webp";

export default function ImpermeabilizacionPozas() {
  return (
    <ProyectLayout 
      url={albumProyect4} 
      titulo="Instalación de Geomembrana, Geocompuesto y GCP en PAD Etapa 2 Fase III"
      cliente="J&R Servicios Múltiples SRL"
      propietario="Minera Tantahuatay"
      ubicacion="Cajamarca Perú"
      fecha="2022"
      logo={Cliente3}
    />
  )
}
