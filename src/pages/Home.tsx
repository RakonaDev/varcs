import { Container } from "../components/utils/Container";
import { FaHandshake, FaHandsHoldingChild, FaMagnifyingGlass, FaPhone, FaUsers } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import Banner1 from '../assets/images/inicio/banner1.webp'
import Instalacion_Membrana from '../assets/images/inicio/instalacion_geomembrana.webp'
import GeoTextil from '../assets/images/inicio/geotextil.webp'
import Soldadura from '../assets/images/inicio/soldadura.webp'
import Instalacion from '../assets/images/inicio/instalacion_gcl.webp'
import { TbUserStar } from "react-icons/tb";
import CardService from "../components/features/CardService";
import { useEffect } from "react";
import SwiperPhotos from "../components/utils/SwiperPhotos";

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='w-full'>
      <header className="h-screen w-full overflow-hidden relative flex justify-center items-center">
        <SwiperPhotos />
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white font-bold text-2xl lg:text-6xl z-50 mx-20 text-center"
        >
          <div className="flex flex-col gap-4">
            Soluciones en Geosintéticos y Tubería HDPE para tus proyectos industriales.
            <Link to='/contacto' className=" w-fit mx-auto text-base rounded-xl px-8 py-2 bg-rojo hover:bg-azul duration-300 transition-colors">Contactanos</Link>
          </div>
        </motion.h1>
      </header>
      <main className="w-full">
        <Container>
          <div className="mx-auto flex flex-col items-center gap-5 text-white lg:w-1/2 w-full py-10">
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-center font-bold text-3xl">¿Quienes Somos?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-center text-lg"><span className="font-bold">VARTECS</span>, Somos una empresa especializada en la comercialización e instalación de geosintéticos y tuberías HDPE, brindando soluciones innovadoras y sostenibles para la industria, minería, construcción y agroindustria. Contamos con un equipo de profesionales altamente capacitados y utilizamos materiales certificados para garantizar la máxima calidad en cada proyecto. Nuestro compromiso es ofrecer productos y servicios de alta eficiencia, asegurando durabilidad, seguridad y óptimo desempeño en cada aplicación.
            </motion.p>
            <TbUserStar size={70} />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className=" text-white px-10 font-medium text-base py-2 rounded-lg bg-black w-fit mx-auto hover:bg-rojo transition-colors duration-500"
            >
              <Link to='/nosotros'>Ver mas</Link>
            </motion.p>
          </div>
        </Container>
        <div className="w-full flex relative justify-end overflow-hidden">
          <section className="w-[58%] absolute left-0 hidden lg:block">
            <img
              src={Banner1}
              width={800}
              height={800}
              alt="VARTECS"
              className="w-full transition-all duration-500"
            />
          </section>
          <section className="w-full lg:w-1/2 z-10 bg-rojo p-5 py-16 text-black flex flex-col gap-5">
            <motion.h2
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              className="font-bold text-3xl text-center mb-10"
            >
              Nuestros Valores
            </motion.h2>
            <ul className="w-full flex gap-10 justify-evenly flex-wrap">
              <li className="flex flex-col items-center justify-center text-center gap-5 min-w-[200px] max-w-[250px]">
                <FaHandsHoldingChild size={70} className="animate-bounce h-16" />
                <p className="font-medium">Honestidad en cada proyecto encomendado.</p>
              </li>
              <li className="flex flex-col items-center justify-center text-center gap-5 min-w-[200px] max-w-[250px]">
                <FaMagnifyingGlass size={60} className="animate-bounce h-16" />
                <p className="font-medium">Garantizar transparencia en cada servicio.</p>
              </li>
              <li className="flex flex-col items-center justify-center text-center gap-5 min-w-[200px] max-w-[250px]">
                <FaHandshake size={70} className="animate-bounce h-16" />
                <p className="font-medium">Responsabilidad en cada servicio prestado.</p>
              </li>
              <li className="flex flex-col items-center justify-center text-center gap-5 min-w-[200px] max-w-[250px]">
                <FaUsers size={50} className="animate-bounce h-20" />
                <p className="font-medium">Respeto y trabajo en equipo.</p>
              </li>
            </ul>
            <div className="w-full flex">
              <Link
                to='/nosotros'
                className="px-6 py-2 bg-white rounded-md text-black mx-auto w-fit hover:bg-black hover:text-white duration-300 transition-colors"
              >
                Conocenos
              </Link>
            </div>
          </section>
        </div>
        <article className="w-full bg-transparent py-10 text-white">
          <Container>
            <div className="flex flex-col gap-5 items-center">
              <motion.h2
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center font-bold text-2xl"
              >
                Contactanos
              </motion.h2>
              <p className="text-center">Direccion: <span className="transition-all duration-500 font-medium hover:text-rojo">Jr. Elmer Faucet Mz. Lt. 7 - Cajamarca</span></p>
              <p className="text-center">Celulares: <span className="transition-all duration-500 font-medium hover:text-rojo">923422004 - 983807040 - 934003145 - 076 264915</span></p>
              <Link to='/contacto' className='flex gap-3 px-8 py-2 items-center bg-rojo rounded-lg font-medium'>
                <FaPhone size={20} />
                Contactar
              </Link>
            </div>
          </Container>
        </article>
        <div className="w-full flex relative overflow-hidden">
          <section className="w-full z-10 bg-azul_oscuro p-5 py-16 text-white flex flex-col gap-5">
            <motion.h2
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              className="font-bold text-3xl text-center mb-10"
            >
              Nuestros Servicios
            </motion.h2>
            <ul className="w-full flex flex-col gap-10 justify-evenly flex-wrap">
              <CardService
                url={Instalacion_Membrana}
                title='Instalación de Geomembrana'
                description="Ofrecemos un servicio especializado en suministro e instalación de geomembranas para proyectos de impermeabilización y contención de líquidos y residuos en diversos sectores: minería, agricultura, construcción"
                link={true}
              />
              <CardService
                url={GeoTextil}
                title='Geotextil'
                description="Brindamos un servicio especializado en la venta e instalación de geotextiles para aplicaciones en ingeniería civil, minería, agricultura y construcción. Nuestros geotextiles están diseñados para mejorar la estabilidad, filtración, drenaje y refuerzo del suelo, optimizando el rendimiento de tus proyectos."
                link={true}
              />
              <CardService
                url={Soldadura}
                title='Soldadura de tubería HDPE'
                description="En distintos diámetros y espesor (SDR), especializados en métodos seguros para unir lineas de conducción de longitudes acorde a las nececesidades del cliente."
                link={true}
              />
              <CardService
                url={Instalacion}
                title='Instalación de GCL y Geocompuesto'
                description="Ofrecemos un servicio especializado en la instalación de GCL (Geosynthetic Clay Liner) y geocompuestos, garantizando máxima seguridad y rendimiento en proyectos de ingeniería civil, minería, rellenos sanitarios, lagunas artificiales y más."
                link={true}
              />
            </ul>
            <div className="w-full flex">
              <Link
                to='/proyectos'
                className="px-6 py-2 bg-white rounded-md text-black mx-auto w-fit hover:bg-black hover:text-white duration-300 transition-colors font-medium"
              >
                Quiero saber mas
              </Link>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}