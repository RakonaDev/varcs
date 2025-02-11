import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../components/utils/Container'
import { Link } from 'react-router-dom'
import { FaPhone } from 'react-icons/fa'
import Proyecto1 from '../assets/images/proyectos/1.webp'
import Proyecto1_1 from '../assets/images/proyectos/1_1.webp'
import Proyecto2 from '../assets/images/proyectos/3.webp'
import Proyecto2_1 from '../assets/images/proyectos/2_1.webp'
import Proyecto4 from '../assets/images/proyectos/4.webp'
import Proyecto4_1 from '../assets/images/proyectos/4_1.webp'
import Proyecto4_2 from '../assets/images/proyectos/4_2.webp'
import Proyecto5_1 from '../assets/images/proyectos/5_1.webp'
import Proyecto5_2 from '../assets/images/proyectos/5_2.webp'
import Proyecto5_3 from '../assets/images/proyectos/5_3.webp'
import Proyecto5_4 from '../assets/images/proyectos/5_4.webp'
import Proyecto3 from '../assets/images/proyectos/banner.webp'
import Proyecto3_1 from '../assets/images/proyectos/3_1.webp'
import Proyecto2_2 from '../assets/images/proyectos/2_2.webp'
import Proyecto6_1 from '../assets/images/proyectos/6_1.webp'
import Proyecto6_2 from '../assets/images/proyectos/6_2.webp'
import Proyecto6_3 from '../assets/images/proyectos/6_3.webp'
import CardProyect from '../components/features/CardProyect'
import Banner1 from '../assets/images/proyectos/banner1.webp'

const albumProyect1 = [
  Proyecto1,
  Proyecto1_1,
]

const albumProyect2 = [
  Proyecto2,
  Proyecto2_1,
  Proyecto2_2,
]

const albumProyect3 = [
  Proyecto3,
  Proyecto3_1,
]

const albumProyect4 = [
  Proyecto4,
  Proyecto4_1,
  Proyecto4_2,
]

const albumProyect5 = [
  Proyecto5_1,
  Proyecto5_2,
  Proyecto5_3,
  Proyecto5_4,
]

const albumProyect6 = [
  Proyecto6_1,
  Proyecto6_2,
  Proyecto6_3,
]

export default function Proyectos() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='w-full min-h-screen'>
      <header className='w-full h-screen overflow-hidden relative flex justify-center items-center'>
        <div className="w-full h-screen absolute top-0 z-20 bg-black/60"></div>
        <img src={Banner1} alt="banner" className="w-full h-screen object-cover absolute top-0 z-10 " />
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-center font-bold text-2xl lg:text-6xl z-50 mx-5"
        >
          Proyectos Realizados
        </motion.h1>
      </header>
      <main className='w-full py-14 bg-transparent text-white'>
        <Container>
          <section className='w-full flex flex-col gap-10 items-center'>
            <div className='w-full flex gap-10 justify-evenly flex-wrap'>
              <CardProyect
                link='/proyectos/1'
                url={albumProyect1}
                title='Instalación de Geomembrana, GCL y Geocompuesto en PAD Fase III'
                direction='Arequipa 2019'
              />
              <CardProyect
                link='/proyectos/2'
                url={albumProyect2}
                title='Impermeabilización de Posas para Cosecha de Agua'
                direction='Cajamarca 2020'
              />
              <CardProyect
                link='/proyectos/3'
                url={albumProyect3}
                title='Instalación de Geomembrana en posas PETAR'
                direction='Ica 2021'
              />
              <CardProyect
                link='/proyectos/4'
                url={albumProyect4}
                title='Instalación de Geomembrana, Geocompuesto y GCP en PAD Etapa 2 Fase III'
                direction='Cajamarca 2022'
              />
              <CardProyect
                link='/proyectos/5'
                url={albumProyect5}
                title='Servicio de instalación de Geosintéticos para el vaso de Depósito de Relaves Etapa 06'
                direction='Yauyos - Perú 2023'
              />
              <CardProyect
                link='/proyectos/6'
                url={albumProyect6}
                title='Instalación de Geomembrana en el Depósito de Relaves'
                direction='Cerro de Pasco 2024'
              />
            </div>
          </section>
        </Container>
      </main>
      <article className="w-full bg-azul_oscuro py-10 text-white overflow-hidden">
        <Container>
          <div className="flex flex-col gap-5 items-center">
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center font-bold text-2xl"
            >
              Contáctanos
            </motion.h1>
            <p className="text-center">Direccion: <span className="transition-all duration-500 font-medium hover:text-rojo">Jr. Elmer Faucet Mz. Lt. 7 - Cajamarca</span></p>
            <p className="text-center">Celulares: <span className="transition-all duration-500 font-medium hover:text-rojo">923422004 - 983807040 - 934003145 - 076 264915</span></p>
            <Link to='/contacto' className='flex gap-3 px-8 py-2 items-center bg-rojo rounded-lg font-medium'>
              <FaPhone size={20} />
              Contactar
            </Link>
          </div>
        </Container>
      </article>
    </div>
  )
}
