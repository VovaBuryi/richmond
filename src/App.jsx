import { useEffect, useState } from 'react';

import VideoHero from './components/VideoHero/VideoHero';
import Genplan from './components/Genplan/Genplan';
import AboutLocation from './components/AboutLocation/AboutLocation';
import Gallery from './components/Gallery/Gallery';
import VRTour from './components/VRTour/VRTour';
import ContactForm from './components/ContactForm/ContactForm';
import Loader from './components/Loader/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // імітація завантаження

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />

      {!isLoading && (
        <>
          <VideoHero />
          <Genplan />
          <AboutLocation />
          <Gallery />
          <VRTour />
          <ContactForm />
        </>
      )}
    </>
  );
}

export default App;
