import { FaTwitter } from "react-icons/fa";
import { Container } from "../utils/Container";
import { motion } from "framer-motion";
import Logo from '../../assets/logo-vartecs1.webp'
import { FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTop, setIsTop] = useState(false)
  useEffect(() => {
    if (window.scrollY > 50) {
      setIsTop(true)
    }
    else {
      setIsTop(false)
    }
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setIsTop(true)
      }
      else {
        setIsTop(false)
      }
    })
  }, [])

  return (
    <>
      <header className={`w-full max-lg:bg-white fixed top-0 z-[90]  ${isTop ? 'shadow-sm shadow-black' : ''} transition-all duration-500`}>
        <section className="w-full relative bg-white h-14 z-[30] text-black">
          <div className="lg:block hidden bg-rojo h-14 w-1/3 hover:w-1/2 duration-500 transition-all rounded-br-full absolute top-0 left-0"></div>
          <Container>
            <div className="w-full h-14 flex justify-center xl:justify-end items-center gap-5">
              <FaFacebookF color="black" size={20} />
              <FaTwitter color="black" size={20} />
              <FaYoutube color="black" size={20} />
              <FaWhatsapp color="black" size={20} />
            </div>
          </Container>
        </section>

        <section className={`w-full z-[100] bg-white duration-700 transition-all relative`}>
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className="bg-rojo w-1/2 h-full lg:block hidden duration-500 transition-all rounded-bl-full absolute top-0 right-0"
          ></motion.div>
          <Container>
            <div className="w-full flex justify-between py-2 items-center">
              <Link to='/' className='flex items-center gap-2'>
                <img
                  src={Logo}
                  width={260}
                  height={70}
                  alt="Logo"
                  className="hover:scale-110 duration-500 transition-all"
                />
              </Link>
              <nav className={'gap-3 z-50 text-base text-white font-bold lg:flex hidden'}>
                <Link to='/'>INICIO</Link>
                <span className="mx-2">|</span>
                <Link to='/nosotros'>NOSOTROS</Link>
                <span className="mx-2">|</span>
                <Link to='/proyectos'>PROYECTOS REALIZADOS</Link>
                <span className="mx-2">|</span>
                <Link to='/contacto'>CONTÁCTANOS</Link>
              </nav>
              <button
                type="button"
                title="menu"
                className="px-4 lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <IoMdMenu size={40} color="black" className="lg:hidden" />
              </button>
            </div>
          </Container>

        </section>
      </header>
      <nav className={`lg:hidden duration-500 transition-all flex flex-col w-full fixed right-0 bg-rojo shadow-sm shadow-black z-[70] ${isOpen ? 'top-[9.7rem]' : '-top-80'} py-8 px-5 gap-5`}>
        <Link to='/' className="font-bold text-white" onClick={() => setIsOpen(false)}>INICIO</Link>
        <Link to='/nosotros' className="font-bold text-white" onClick={() => setIsOpen(false)}>NOSOTROS</Link>
        <Link to='/proyectos' className="font-bold text-white" onClick={() => setIsOpen(false)}>PROYECTOS REALIZADOS</Link>
        <Link to='/contacto' className="font-bold text-white" onClick={() => setIsOpen(false)}>CONTÁCTANOS</Link>
      </nav>
    </>
  )
}