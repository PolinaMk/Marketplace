import Promo1 from '../assets/images/swiper_img_1.jpg';
import Promo2 from '../assets/images/swiper_img_2.jpg';
import Promo3 from '../assets/images/swiper_img_3.jpg';
import Promo4 from '../assets/images/swiper_img_4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import { useSelector } from 'react-redux';
import { AppStore } from '../redux/store';
//import 'swiper/css/pagination';

export const Promo: React.FC = () => {
  const { promoShow } = useSelector((store: AppStore) => store.pages.cards)

  if (promoShow) {
    return <Swiper className="swiper mySwiper" pagination={{ clickable: true }} modules={[Pagination]}>
      <div className="slider__text">
        <p className="slider__title">Welcome to</p>
        <p className="slider__title_second">Creative</p>
      </div>
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide slider">
          <div className="container container__swiper slider__wrapp-img">
            <img className="slider__img" src={Promo1} alt="img1" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide slider">
          <div className="container slider__wrapp-img">
            <img className="slider__img" src={Promo2} alt="img2" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide slider">
          <div className="container slider__wrapp-img">
            <img className="slider__img" src={Promo3} alt="img3" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide slider">
          <div className="container slider__wrapp-img">
            <img className="slider__img" src={Promo4} alt="img4" />
          </div>
        </SwiperSlide>
      </div>
      <div className="swiper-pagination swiper-pagination-bullet"></div>
    </Swiper >
  } else {
    return null
  }
}