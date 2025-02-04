import { Container } from "../components/utils/Container";
import { FaHandshake, FaHandsHoldingChild, FaMagnifyingGlass, FaPhone, FaUsers } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import Banner from '../assets/images/construction.webp'
import ValoresAside from '../assets/images/excavator.webp'
import { TbUserStar } from "react-icons/tb";

export function Home() {
  return (
    <div className={`w-full`}>
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
          className="text-white font-bold text-4xl z-50 mx-5"
        >
          <div className="flex flex-col gap-4">
            Soluciones en Geosintéticos y Tubería HDPE para tus proyectos industriales.
            <Link to='' className=" w-fit mx-auto text-base rounded-xl px-8 py-2 bg-rojo hover:bg-azul duration-300 transition-colors">Contactanos</Link>
          </div>
        </motion.h1>
      </header>
      <main className="w-full">
        <Container>
          <div className="mx-auto flex flex-col items-center gap-5 text-white lg:w-1/2 w-full py-10">
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-center font-bold text-2xl">¿Quienes Somos?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-center"><span className="font-bold">VARTECS</span>, empresa peruana que tiene la disposicion de atender a los diversos sectores de mineria, contruccion, agricultura, industrias diversas, y organismos gubernamentales cubriendo proyectos de infraestructura y arquetectonicos.
            </motion.p>
            <TbUserStar size={70} />
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className=" text-white px-10 font-medium text-base py-2 rounded-lg bg-black w-fit mx-auto hover:bg-rojo transition-colors duration-500"
            >
              Ver Mas
            </motion.button>
          </div>
        </Container>
        <div className="w-full flex relative justify-end overflow-hidden">
          <section className="w-[58%] absolute left-0">
            <img
              src={ValoresAside}
              width={800}
              height={800}
              alt="VARTECS"
              className="w-full blur-sm hover:blur-none transition-all duration-500"
            />
          </section>
          <section className="w-1/2 z-10 bg-rojo p-5 py-16 text-black flex flex-col gap-5">
            <motion.h1
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              className="font-bold text-3xl text-center mb-10"
            >
              Nuestros Valores
            </motion.h1>
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
                to='#'
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
              <Link to='' className='flex gap-3 px-8 py-2 items-center bg-rojo rounded-lg font-medium'>
                <FaPhone size={20} />
                Contactar
              </Link>
            </div>
          </Container>
        </article>
        <div className="w-full flex relative overflow-hidden">
          <section className="w-full z-10 bg-azul p-5 py-16 text-white flex flex-col gap-5">
            <motion.h1
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              className="font-bold text-3xl text-center mb-10"
            >
              Nuestros Servicios
            </motion.h1>
            <ul className="w-full flex gap-10 justify-evenly flex-wrap">
              <li className="flex flex-col items-center justify-center text-center gap-5 min-w-[200px] max-w-[250px]">
                <FaHandsHoldingChild size={70} className="flyingItem h-24" />
                <p className="font-medium">Instalacion de Geomembrana.</p>
              </li>
              <li className="flex flex-col items-center justify-center text-center gap-5 min-w-[200px] max-w-[250px]">
                <FaMagnifyingGlass size={60} className="flyingItem h-24" />
                <p className="font-medium">HDPE, LLDPE, PVC.</p>
              </li>
              <li className="flex flex-col items-center justify-center text-center gap-5 min-w-[200px] max-w-[250px]">
                <FaHandshake size={70} className="flyingItem h-24" />
                <p className="font-medium">Geotextil.</p>
              </li>
              <li className="flex flex-col items-center justify-center text-center gap-5 min-w-[200px] max-w-[250px]">
                <FaUsers size={60} className="flyingItem h-24" />
                <p className="font-medium">Geocompuestos.</p>
              </li>
            </ul>
            <div className="w-full flex">
              <Link
                to='#'
                className="px-6 py-2 bg-white rounded-md text-black mx-auto w-fit hover:bg-black hover:text-white duration-300 transition-colors"
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