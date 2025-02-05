// import { useEffect } from 'react'
import Banner from '../assets/images/proyectos/banner.webp'
import { motion } from 'framer-motion'
import { Container } from '../components/utils/Container'
import { Link } from 'react-router-dom'
import { FaPhone } from 'react-icons/fa'
import Proyecto1 from '../assets/images/proyectos/1.webp'
import Proyecto2 from '../assets/images/proyectos/3.webp'
import Proyecto4 from '../assets/images/proyectos/4.webp'
import Proyecto5 from '../assets/images/proyectos/5.webp'
import Proyecto3 from '../assets/images/proyectos/banner.webp'
import CardProyect from '../components/features/CardProyect'

export default function Proyectos() {
  /*
  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  */
  return (
    <div className='w-full min-h-screen'>
      <header className='w-full h-screen overflow-hidden relative flex justify-center items-center'>
        <div className="w-full h-screen absolute top-0 z-20 bg-black/60"></div>
        <img src={Banner} alt="banner" className="w-full h-screen object-cover absolute top-0 z-10 " />
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white font-bold text-6xl z-50 mx-5"
        >
          Proyectos Realizados
        </motion.h1>
      </header>
      <main className='w-full py-14 bg-transparent text-white'>
        <Container>
          <section className='w-full flex flex-col gap-10 items-center'>
            <div className='w-full flex gap-10 justify-evenly flex-wrap'>
              <CardProyect 
                url={Proyecto1} 
                title='Proyecto Construcción de Pad Face III' 
                direction='Cerro Verde Arequipa 2019'
              />
              <CardProyect 
                url={Proyecto2} 
                title='Impermeabilización de Pozas' 
                direction='Foncreagro yanacocha  Cajamarca 2020'
              />
              <CardProyect 
                url={Proyecto3} 
                title='Impermeabilización de Posas PETAR' 
                direction='Distrito de Marcona ICA'
              />
              <CardProyect 
                url={Proyecto4} 
                title='Construcción del Pad Face II' 
                direction='J&R - Tantahuatay Cajamarca'
              />
              <CardProyect 
                url={Proyecto5} 
                title='Decrecimiento de Deposito de Relaves' 
                direction='Consorcio Minero Sunec'
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
              <p className="text-center">Celulares: <span className="transition-all duration-500 font-medium hover:text-rojo">923422004</span></p>
              <Link to='' className='flex gap-3 px-8 py-2 items-center bg-rojo rounded-lg font-medium'>
                <FaPhone size={20} />
                Contactar
              </Link>
            </div>
          </Container>
        </article>
    </div>
  )
}
