import styles from './VRTour.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';
const VRTour = () => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section
      ref={ref}
      className={`section fromLeft ${isVisible ? 'visible' : ''}`}
    >
      <div className='container'>
        <div className={styles.svgWrapper}>
          <iframe
            width='100%'
            height='640'
            frameborder='0'
            allow='xr-spatial-tracking; gyroscope; accelerometer'
            allowfullscreen
            scrolling='no'
            src='https://kuula.co/share/collection/7HJBk?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1'
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VRTour;
