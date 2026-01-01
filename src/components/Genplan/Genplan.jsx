import { useNavigate } from 'react-router-dom';
import styles from './Genplan.module.css';
import genPlan from '/genPlan.jpg';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';

const Genplan = () => {
  const navigate = useNavigate();

  const [ref, isVisible] = useScrollAnimation();

  const [paused, setPaused] = useState(false); // новий state для паузи
  const [activeUnit, setActiveUnit] = useState(null);
  const units = ['1', '2', '3']; // список всіх unit id

  useEffect(() => {
    if (paused) {
      setActiveUnit(null); // прибираємо підсвічування, якщо пауза
      return;
    }
    let index = 0;
    const interval = setInterval(() => {
      setActiveUnit(units[index]);
      index = (index + 1) % units.length; // циклічно
    }, 1250); // змінюємо кожну секунду

    return () => clearInterval(interval);
  }, [paused]);

  const handleHouseClick = (id) => {
    navigate(`/unit/${id}`);
  };

  return (
    <section
      ref={ref}
      className={`section fromRight ${isVisible ? 'visible' : 'hidden'}`}
    >
      <div className='container'>
        <div className='section-title'>
          <h1 style={{ textAlign: 'center' }}>
            Richmond Hill Road Residens
            <br />
            New Canaan, CT 06840
          </h1>
        </div>
        <div className={styles.svgWrapper}>
          <svg
            viewBox='0 0 4096 2048'
            className={styles.svg}
            xmlns='http://www.w3.org/2000/svg'
          >
            <image href={genPlan} width='4096' height='2048' />

            {/* HOUSE 1 */}
            <path
              id='unit-1'
              className={`${styles.house} ${
                activeUnit === '1' ? styles.active : ''
              }`}
              d='M2060 1513L1906 1439L1900 1010.5L1874 999L1928 916L1948.5 906.5V815.5L1928 808.5L1921.5 794.5L2199.5 575.5L2302 390.5L2777 540L3086.5 818.5L3079.5 833.5L3055.5 825L3024 1212L3033 1216.5V1231.5L3020 1236V1264L2916.5 1328L2912.5 1417.5L2933.5 1427V1431.5L2640 1614.5L2503 1561L2314 1674L2060 1547.5V1513Z'
              onClick={() => handleHouseClick('1')}
              onMouseEnter={() => setPaused(true)} // зупинка анімації при наведенні
              onMouseLeave={() => setPaused(false)} // відновлення після виходу
            />

            {/* HOUSE 2 */}
            <path
              id='unit-2'
              className={`${styles.house} ${
                activeUnit === '2' ? styles.active : ''
              }`}
              d='M1872.5 1456.5L1905 1438L1896.5 1010.5L1874 1000L1925.5 914.5L1945 904V816L1925.5 808L1922 794L2198.5 575L2299.5 389.5L1895.5 261L1780 428L1503.5 631.5L1508.5 642.5L1527.5 649.5L1530 745H1525.5L1473 828L1499 838L1516.5 1253L1556.5 1272L1516.5 1291V1302L1627.5 1358.5L1644.5 1348L1872.5 1456.5Z'
              onClick={() => handleHouseClick('2')}
              onMouseEnter={() => setPaused(true)} // зупинка анімації при наведенні
              onMouseLeave={() => setPaused(false)} // відновлення після виходу
            />

            {/* HOUSE 3 */}
            <path
              id='unit-3'
              className={`${styles.house} ${
                activeUnit === '3' ? styles.active : ''
              }`}
              d='M1485.5 1266L1515.5 1250L1498 839L1473 829L1472.5 825L1529 739.5L1526 651L1508.5 642.5L1501 630L1779 428L1891.5 259L1594.5 163L1452.5 371.5L1310 319L1168.5 525.5L1177.5 533L1204 542.5L1233.5 984L1272.5 1001L1273.5 1022.5L1247 1034.5V1040.5L1275.5 1052.5L1282.5 1169L1458.5 1255L1485.5 1266Z'
              onClick={() => handleHouseClick('3')}
              onMouseEnter={() => setPaused(true)} // зупинка анімації при наведенні
              onMouseLeave={() => setPaused(false)} // відновлення після виходу
            />
          </svg>
          {/* Новий блок з текстом */}
          <div className={styles.tooltip}>
            Click on the desired section to view detailed information
          </div>
        </div>
        {/* 
        {activeHouse && (
          <div className={styles.info}>
            Обрана секція: <b>{activeHouse}</b>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Genplan;
