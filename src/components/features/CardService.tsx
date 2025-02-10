import { motion } from 'framer-motion'
import { FaCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

type CardServiceProps = {
  url: string,
  title: string,
  description: string
  tituloParrafo1?: string
  parrafo1?: string
  tituloParrafo2?: string
  parrafo2?: string
  tituloParrafo3?: string
  parrafo3?: string
  tituloParrafo4?: string
  parrafo4?: string
  link?: boolean
}

export default function CardService({ url, title, description, tituloParrafo1, parrafo1, tituloParrafo2, parrafo2, tituloParrafo3, parrafo3, tituloParrafo4, parrafo4, link }: CardServiceProps) {
  console.log(url, title, description)
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex gap-5 mx-auto max-h-[600px] max-lg:flex-col bg-white text-black max-w-[70rem] w-full min-w-[300px] rounded-xl p-5 shadow-md shadow-black'
    >	
      <header className='lg:w-[27rem] h-[550px] w-full overflow-hidden rounded-xl'>
        <img src={url} alt="CardService" className="w-full h-full object-cover" />
      </header>
      <main className='p-5 flex flex-col gap-6 justify-center w-full lg:w-[43rem] '>
        <h1 className="font-bold text-xl max-lg:text-center lg:text-4xl">{title}</h1>
        <p className="">{description}</p>
        <ul>
          {
            parrafo1 && <li className="flex gap-3 items-center">
              <FaCheck size={20} />
              <p className="font-medium"><span className='font-bold'>{tituloParrafo1}:</span> {parrafo1}</p>
            </li>
          }
          {
            parrafo2 && <li className="flex gap-3 items-center">
              <FaCheck size={20} />
              <p className="font-medium"><span className='font-bold'>{tituloParrafo2}:</span> {parrafo2}</p>
            </li>
          }
          {
            parrafo3 && <li className="flex gap-3 items-center">
              <FaCheck size={20} />
              <p className="font-medium"><span className='font-bold'>{tituloParrafo3}:</span> {parrafo3}</p>
            </li>
          }
          {
            parrafo4 && <li className="flex gap-3 items-center">
              <FaCheck size={20} />
              <p className="font-medium"><span className='font-bold'>{tituloParrafo4}:</span> {parrafo4}</p>
            </li>
          }
        </ul>
        {
          link && 
            <Link to='/servicios' className='w-fit mx-auto px-6 py-2 bg-rojo text-white hover:bg-black rounded-lg font-medium'>
              Ver más
            </Link>
        }
      </main>
    </motion.div>
  )
}
