import VideoHero from '../components/VideoHero/VideoHero';
import Genplan from '../components/Genplan/Genplan';
import AboutLocation from '../components/AboutLocation/AboutLocation';
import Gallery from '../components/Gallery/Gallery';
import VRTour from '../components/VRTour/VRTour';
import ContactForm from '../components/ContactForm/ContactForm';
import Loader from '../components/Loader/Loader';

const Home = () => {
  return (
    <>
      <VideoHero />
      <Genplan />
      <AboutLocation />
      <Gallery />
      <VRTour />
      <ContactForm />
    </>
  );
};

export default Home;
