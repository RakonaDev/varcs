import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';


export default function SwiperPhotosDinamyc({ urls }: { urls: string[] }) {
  return (
    <div className='w-full h-screen absolute top-0 z-30'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className='w-full h-screen z-30'
      >
        {
          urls.map((url) => {
            return (
              <SwiperSlide>
                <img
                  src={url}
                  width={1440}
                  height={960}
                  alt="Banner"
                  className="w-full oscuro h-screen object-cover absolute top-0 brightness-50"
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}
