import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import UnitPage from './pages/Unit/UnitPage';
import Loader from './components/Loader/Loader';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // старт лоадера при зміні маршруту
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // імітація завантаження

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Loader isLoading={isLoading} />

      {!isLoading && (
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/unit/:id' element={<UnitPage />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
