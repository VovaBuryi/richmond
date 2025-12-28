import styles from './Loader.module.css';

const Loader = ({ isLoading }) => {
  return (
    <div className={`${styles.loader} ${!isLoading ? styles.hidden : ''}`}>
      <div className={styles.content}>
        <div className={styles.logo}>Richmond Hill Road Residens</div>
        <div className={styles.line}></div>
        <p>Loading experience</p>
      </div>
    </div>
  );
};

export default Loader;
