import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Banner2 from '../../assets/images/inicio/banner2.webp';
import Banner3 from '../../assets/images/inicio/banner3.webp';
import Banner4 from '../../assets/images/inicio/banner4.webp';
import Banner5 from '../../assets/images/inicio/banner5.webp';
import 'swiper/swiper-bundle.css';

/*
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
*/

export default function SwiperPhotos() {
  return (
    <div className='w-full h-screen absolute top-0 z-30'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
        className='w-full h-screen z-30'
      >
        <SwiperSlide>
          <img
            src={Banner5}
            width={1440}
            height={960}
            alt="Banner"
            className="w-full oscuro h-screen object-cover absolute top-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Banner2}
            width={1440}
            height={960}
            alt="Banner"
            className="w-full oscuro h-screen object-cover absolute top-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Banner3}
            width={1440}
            height={960}
            alt="Banner"
            className="w-full oscuro h-screen object-cover absolute top-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Banner4}
            width={1440}
            height={960}
            alt="Banner"
            className="w-full oscuro h-screen object-cover absolute top-0"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
