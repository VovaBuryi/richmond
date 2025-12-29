import { Link, useParams } from 'react-router-dom';
import styles from './UnitHero.module.css';

const UnitHero = () => {
  const { id } = useParams();

  return (
    <main className={styles.page}>
      <div className='container'>
        <section className={styles.hero}>
          <img
            src={`/richmond/src/assets/gallery/units/${id}.jpg`}
            alt={`Unit ${id}`}
            className={styles.image}
          />

          <div className={styles.overlay}>
            <Link to='/' className={styles.back}>
              HOME
            </Link>

            <h1 className={styles.title}>UNIT {id}</h1>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UnitHero;
