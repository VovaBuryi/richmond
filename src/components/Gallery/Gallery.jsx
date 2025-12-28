import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import styles from './Gallery.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const images = ['/assets/gallery/1.jpg', '/assets/gallery/2.jpg'];

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`section fromRight ${isVisible ? 'visible' : ''}`}
    >
      <div className='container'>
        <h2 className='section-title'>Gallery</h2>
        {/* MAIN IMAGE */}
        <Swiper
          modules={[Navigation, Thumbs, Autoplay]}
          navigation
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          className={styles.mainSlider}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt='' />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* THUMBNAILS */}
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={2}
          spaceBetween={12}
          loop={true}
          className={styles.thumbs}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt='' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
