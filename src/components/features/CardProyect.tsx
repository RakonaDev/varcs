import { FaPhoneAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { IoSettingsSharp } from "react-icons/io5"
import { MdPushPin } from "react-icons/md"

type CardProyectProps = {
  url: string[]
  title: string
  direction: string
  link: string
}

export default function CardProyect({ url, title, direction, link }: CardProyectProps) {
  return (
    <Link
      to={link}
      className='bg-transparent text-black p-5 rounded-md max-w-[550px] h-[590px] w-full'>

      <div className="h-full w-full relative overflow-hidden rounded-md cursor-grab">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
          }}
          className="w-full h-full"
        >
          {
            url.map((url, index) => <SwiperSlide key={index}><img src={url} alt="proyecto" className="w-full object-cover h-full" /></SwiperSlide>)
          }
        </Swiper>
        <div className='flex text-white bg-black/30 flex-col gap-5 items-center justify-center absolute w-full p-5 pb-9 bottom-0 z-10'>
          <div className="flex gap-5 ">
            <div className='font-bold text-lg w-1/2'>
              <h1 className="flex text-xl gap-2 items-center"><IoSettingsSharp /> Proyecto</h1>
              <p className="font-normal">{title}</p>
            </div>
            <div className="font-bold text-lg w-1/2">
              <h1 className="flex text-xl gap-2 items-center"><MdPushPin /> Ubicación</h1>
              <p className="font-normal">{direction}</p>
            </div>
          </div>
          <Link to='/contacto' className='flex gap-2 items-center w-fit font-medium mx-auto px-8 py-2 bg-azul_oscuro rounded-xl text-white'>
            <FaPhoneAlt size={25} />
            Contactar
          </Link>
        </div>
      </div>

      {/*<div className='flex text-white bg-black/30 flex-col gap-5 items-center justify-center absolute w-full p-10 bottom-5 z-10'>
        <h1 className='font-bold text-lg'>{title}</h1>
        <p><span className='font-medium'>Ubicación: </span>{direction}</p>
        <Link to='/contacto' className='flex gap-2 items-center w-fit font-medium mx-auto px-8 py-2 bg-azul_oscuro rounded-xl text-white'>
          <FaPhoneAlt size={25} />
          Contactar
        </Link>
      </div>*/}
    </Link>
  )
}
