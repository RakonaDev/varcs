import { FaTwitter } from "react-icons/fa";
import { Container } from "../utils/Container";
import { motion } from "framer-motion";
import Logo from '../../assets/logo-vartecs.webp'
import { FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Header() {
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
    <header className={`w-full fixed top-0 z-[100] ${isTop ? 'shadow-lg shadow-black' : ''} transition-all duration-500`}>
      <section className="w-full relative bg-black h-14">
        <div className="bg-rojo h-14 w-1/3 hover:w-1/2 duration-500 transition-all rounded-br-full absolute top-0 left-0"></div>
        <Container>
          <div className="w-full h-14 flex justify-center xl:justify-end items-center gap-5">
            <FaFacebookF color="white" size={20} />
            <FaTwitter color="white" size={20} />
            <FaYoutube color="white" size={20} />
            <FaWhatsapp color="white" size={20} />
          </div>
        </Container>
      </section>
      <section className={`w-full ${isTop ? 'bg-black' : 'bg-transparent'} duration-700 transition-all relative`}>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          className="bg-rojo w-1/2 h-full duration-500 transition-all rounded-bl-full absolute top-0 right-0"
        ></motion.div>
        <Container>
          <div className="w-full flex justify-between py-2 items-center">
            <img
              src={Logo}
              width={210}
              height={60}
              alt="Logo"
              className="hover:scale-110 duration-500 transition-all"
            />
            <nav className={'flex gap-3 z-50 text-base text-white font-bold '}>
              <a href="#">INICIO</a>
              <span className="mx-2">|</span>
              <a href="#">NOSOTROS</a>
              <span className="mx-2">|</span>
              <a href="#">PROYECTOS REALIZADOS</a>
              <span className="mx-2">|</span>
              <a href="">CONTACTANOS</a>
            </nav>
          </div>
        </Container>
      </section>
    </header>
  )
}