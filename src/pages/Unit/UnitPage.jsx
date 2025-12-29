// import { Link, useParams } from 'react-router-dom';

import UnitStats from './UnitStats/UnitStats';
import UnitHero from './UnitHero/UnitHero';
import VRTour from '../../components/VRTour/VRTour';
import ContactForm from '../../components/ContactForm/ContactForm';
import Gallery from '../../components/Gallery/Gallery';

const UnitPage = () => {
  return (
    <>
      <UnitHero />
      <UnitStats />
      <Gallery />
      <VRTour />
      <ContactForm />
    </>
  );
};

export default UnitPage;
