import styles from './ContactForm.module.css';
import managerPhoto from '/manager.png';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ContactForm = () => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section
      ref={ref}
      className={`section fromBottom ${isVisible ? 'visible' : ''}`}
    >
      <div className='container'>
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.manager}>
            <div className={styles.managerPhoto}>
              <img src={managerPhoto} alt='Sales manager' />
            </div>
            <div className={styles.managerData}>
              <h3>Jane Doe</h3>
              <p className={styles.position}>Sales manager</p>

              <div className={styles.contacts}>
                <p>
                  📞 <a href='tel:+380991234567'>+38 (099) 123-45-67</a>
                </p>
                <p>
                  ✉️ <a href='mailto:sales@example.com'>sales@example.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.formBlock}>
            <h2>Schedule a Viewing</h2>

            <form className={styles.form}>
              <input type='text' placeholder='Your name' />
              <input type='tel' placeholder='Phone number' />
              <input type='email' placeholder='Email' />
              <textarea placeholder='Text message' rows='4' />
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
