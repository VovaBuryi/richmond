import styles from './AboutLocation.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const AboutLocation = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`section fromLeft ${isVisible ? 'visible' : ''}`}
    >
      <div className='container'>
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.description}>
            <h2>Object description</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              ratione voluptatibus ipsa aliquam cumque tenetur at iusto! Ipsam
              blanditiis repudiandae, excepturi eius distinctio earum nam
              delectus tenetur unde mollitia recusandae.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, a
              consectetur corrupti ut perferendis atque ratione at facere,
              numquam, corporis eos. Inventore distinctio minus dolorum officia
              a voluptates nihil omnis.
            </p>
          </div>

          {/* RIGHT */}
          <div className={styles.mapBlock}>
            <h3 className={styles.mapTitle}>Discover the Area</h3>
            <div className={styles.map}>
              <iframe
                title='Google Map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48059.23579943827!2d-73.54299749467205!3d41.16284827811538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2a7a7c7064afd%3A0x9ea44d7fc4c4f9f5!2zTmV3IENhbmFhbiwg0JrQvtC90L3QtdC60YLQuNC60YPRgiAwNjg0MCwg0KHQv9C-0LvRg9GH0LXQvdGWINCo0YLQsNGC0Lgg0JDQvNC10YDQuNC60Lg!5e0!3m2!1suk!2sua!4v1766745721545!5m2!1suk!2sua'
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLocation;
