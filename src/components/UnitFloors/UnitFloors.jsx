import { useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import data from '../../assets/data.json';
import { loadGallery } from '../../hooks/loadGallery';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

import styles from './UnitFloors.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const UnitFloors = () => {
  const { id } = useParams();
  const unit = data.find((item) => item.id === Number(id));

  const images = useMemo(() => {
    return loadGallery('fu' + unit.id);
  }, [unit]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [ref, isVisible] = useScrollAnimation();

  if (!images.length) return null;

  return (
    <section
      ref={ref}
      className={`section fromRight ${isVisible ? 'visible' : ''}`}
    >
      <div className='container'>
        {/* <h2 className='section-title'>Floor plans</h2> */}

        {/* MAIN */}
        <Swiper
          modules={[Zoom, Navigation, Thumbs, Autoplay]}
          initialSlide={1}
          zoom={{
            maxRatio: 2, // максимум збільшення
            minRatio: 1, // мінімум
          }}
          navigation
          loop
          // autoplay={{ delay: 3000 }}
          thumbs={{ swiper: thumbsSwiper }}
          className={styles.mainSlider}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className='swiper-zoom-container'>
                <img src={img} alt={`Floor plans ${i + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* THUMBS */}
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
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

export default UnitFloors;
