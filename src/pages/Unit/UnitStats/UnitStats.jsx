import styles from './UnitStats.module.css';
import { useParams } from 'react-router-dom';
import data from '../../../assets/data.json';

const UnitStats = () => {
  const { id } = useParams();

  const unit = data.find((item) => item.id === Number(id));

  if (!unit) {
    return <div className='container'>Unit not found</div>;
  }

  return (
    <section className='unit-stats section'>
      <div className='container'>
        <div className={styles.grid}>
          <div className={styles.item}>
            <div className={styles.value}>${unit.price.toLocaleString()}</div>
            <div className={styles.label}>Price</div>
          </div>

          <div className={styles.item}>
            <div className={styles.value}>{unit.bedrooms}</div>
            <div className={styles.label}>Bedrooms</div>
          </div>

          <div className={styles.item}>
            <div className={styles.value}>{unit.bathrooms}</div>
            <div className={styles.label}>Bathrooms</div>
          </div>

          <div className={styles.item}>
            <div className={styles.value}>{unit.sqft}</div>
            <div className={styles.label}>Sq Ft</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitStats;
