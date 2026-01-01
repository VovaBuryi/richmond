// import { Link, useParams } from 'react-router-dom';

import UnitStats from './UnitStats/UnitStats';
import UnitHero from './UnitHero/UnitHero';
import VRTour from '../../components/VRTour/VRTour';
import ContactForm from '../../components/ContactForm/ContactForm';
import UnitGallery from '../../components/UnitGallery/UnitGallery';
import UnitFloors from '../../components/UnitFloors/UnitFloors';

const UnitPage = () => {
  return (
    <>
      <UnitHero />
      <UnitStats />
      <UnitFloors />
      <UnitGallery />
      <VRTour />
      <ContactForm />
    </>
  );
};

export default UnitPage;
