import styles from './VideoHero.module.css';
import heroVideo from '/video.mp4';

const VideoHero = () => {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={styles.overlay}></div>
      {/* Richmond Hill Road Residens New Canaan, CT 06840
      <div className={styles.content}> */}
      {/* <h1>Richmond Hill Road Residens</h1>
      <p>New Canaan, CT 06840</p> */}
      {/* <button>Make a choice</button> */}
      {/* </div> */}
    </section>
  );
};

export default VideoHero;
