import { FaGrinStars } from "react-icons/fa"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

type CardProyectProps = {
  url: string
  title: string
  direction: string
}

export default function CardProyect({ url, title, direction }: CardProyectProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-white text-black shadow-md shadow-black p-5 rounded-md max-w-[550px]'>
      <div className="h-[350px] w-full relative overflow-hidden rounded-md">
        <img src={url} alt="proyecto" className="w-full object-cover h-full" />
      </div>
      <div className='flex flex-col gap-5 items-center justify-center p-5'>
        <h1 className='font-bold text-lg'>{title}</h1>
        <p><span className='font-medium'>Ubicación: </span>{direction}</p>
        <Link to='/contacto' className='flex gap-2 items-center w-fit font-medium mx-auto px-8 py-2 bg-azul_oscuro rounded-xl text-white'>
          <FaGrinStars size={25} />
          Quiero algo así
        </Link>
      </div>
    </motion.section>
  )
}
