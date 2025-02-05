import { Container } from '../components/utils/Container'
import Banner from '../assets/images/nosotros/banner.webp'
import { motion } from 'framer-motion'
import { FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import NosotrosAside from '../assets/images/nosotros/nosotros1.webp'
import Background from '../assets/images/nosotros/background.webp'
import { IoEyeSharp } from "react-icons/io5";
import { FaAward, FaCrown } from "react-icons/fa6";
import { useEffect } from 'react'

export default function Nosotros() {
  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <main className='w-full min-h-screen relative overflow-hidden'>
      <header className="h-screen w-full overflow-hidden relative flex justify-center items-center">
        <div className="w-full h-screen absolute top-0 z-10 bg-black/60"></div>
        <img
          src={Banner}
          width={1440}
          height={960}
          alt="Banner"
          className="w-full object-cover absolute top-0"
        />
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white font-bold text-6xl z-50 mx-5"
        >
          <div className="flex flex-col gap-4">
            Nosotros
          </div>
        </motion.h1>
      </header>
      <main className='w-full py-14 bg-azul_oscuro text-white'>
        <Container>
          <div className='w-full flex gap-10 items-center'>
            <motion.section
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='w-1/2 overflow-hidden'
            >
              <img src={NosotrosAside} alt="nosotros" className='transition-all duration-500 hover:scale-110' />
            </motion.section>
            <motion.section
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='w-1/2 flex flex-col gap-10'
            >
              <h1
                className="font-bold text-4xl"
              >
                ¿Quienes Somos?
              </h1>
              <p className='font-medium text-xl'>
                Somos una empresa especializada en la comercialización e instalación de geosintéticos y tuberías HDPE, brindando soluciones innovadoras y sostenibles para la industria, minería, construcción y agroindustria. Contamos con un equipo de profesionales altamente capacitados y utilizamos materiales certificados para garantizar la máxima calidad en cada proyecto. Nuestro compromiso es ofrecer productos y servicios de alta eficiencia, asegurando durabilidad, seguridad y óptimo desempeño en cada aplicación.
              </p>
            </motion.section>
          </div>
        </Container>
      </main>
      <article className='w-full relative min-h-[500px] overflow-hidden bg-rojo py-10 text-white'>
        <img src={Background} alt="background" className="w-full h-screen object-cover absolute -top-32" />
        <Container>
          <motion.ul className='w-full h-auto z-20 flex justify-evenly gap-10 flex-wrap'>
            <motion.li 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='flex flex-col gap-5 items-center bg-white/40 shadow-sm shadow-black/80 backdrop-blur-md rounded-xl p-6 w-[350px]'>
              <FaAward color='#074973' size={80} />
              <h1 className='text-center text-black font-bold text-3xl'>Misión</h1>
              <p className='text-center text-black font-medium'>Ser una empresa lider en nuestro rubro, siendo actores fundamentales del desarrollo en cada proyecto ejecutado, logrando consolidar nuestro liderazgo, compromiso y responsabilidad a traves de nuestros colaboradores y nuestro entorno, con un crecimiento firme y sostenido.</p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='flex flex-col gap-5 items-center bg-white/40 shadow-sm shadow-black/80 backdrop-blur-md rounded-xl p-6 w-[350px]'>
              <IoEyeSharp color='#074973' size={80} />
              <h1 className='text-center text-black font-bold text-3xl'>Visión</h1>
              <p className='text-center text-black font-medium'>Brindar lo mejor de nuestra empresa con un sistema de gestion integrado, fijando metas y objetivos que permitan prestar un servicio de excelencia, eficacia y calidad, socialmente responsable, teniendo como principales preceptos la seguridad y cuidado del medio ambiente.</p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='flex flex-col gap-5 items-center bg-white/40 shadow-sm shadow-black/80 backdrop-blur-md rounded-xl p-6 w-[350px]'>
              <FaCrown color='#074973' size={80} />
              <h1 className='text-center text-black font-bold text-3xl'>Valores</h1>
              <p className='text-black font-medium'>
                <ul className='list-disc px-5'>
                  <li>Respeto y trabajo en equipo.</li>
                  <li>Honestidad en cada proyecto encomendado.</li>
                  <li>Garantizar transparencia en cada servicio.</li>
                  <li>Responsabilidad en cada servicio prestado.</li>
                </ul>
              </p>
            </motion.li>
          </motion.ul>
        </Container>
      </article>
      <article className="w-full bg-transparent py-10 text-white overflow-hidden">
        <Container>
          <div className="flex flex-col gap-5 items-center">
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center font-bold text-2xl"
            >
              Contactanos
            </motion.h1>
            <p className="text-center">Direccion: <span className="transition-all duration-500 font-medium hover:text-rojo">Jr. Elmer Faucet Mz. Lt. 7 - Cajamarca</span></p>
            <p className="text-center">Celulares: <span className="transition-all duration-500 font-medium hover:text-rojo">923422004</span></p>
            <Link to='/contacto' className='flex gap-3 px-8 py-2 items-center bg-rojo rounded-lg font-medium'>
              <FaPhone size={20} />
              Contactar
            </Link>
          </div>
        </Container>
      </article>
    </main>
  )
}
