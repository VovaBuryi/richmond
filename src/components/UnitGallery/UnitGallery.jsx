import { useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import data from '../../assets/data.json';
import { loadGallery } from '../../hooks/loadGallery';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import styles from './UnitGallery.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const UnitGallery = () => {
  const { id } = useParams();
  const unit = data.find((item) => item.id === Number(id));

  const images = useMemo(() => {
    return loadGallery('u' + unit.id);
  }, [unit]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [ref, isVisible] = useScrollAnimation();

  if (!images.length) return null;

  return (
    <section
      ref={ref}
      className={`section fromLeft ${isVisible ? 'visible' : ''}`}
    >
      <div className='container'>
        <h2 className='section-title'>Gallery</h2>

        {/* MAIN */}
        <Swiper
          modules={[Navigation, Thumbs, Autoplay]}
          navigation
          loop
          autoplay={{ delay: 3000 }}
          thumbs={{ swiper: thumbsSwiper }}
          className={styles.mainSlider}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt={`Gallery ${i + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* THUMBS */}
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={5}
          spaceBetween={12}
          loop
          className={styles.thumbs}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt={`Thumb ${i + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default UnitGallery;
