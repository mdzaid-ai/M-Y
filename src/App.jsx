import React, { useState, useEffect } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { RealEstatePage } from './pages/RealEstatePage';
import { ConstructionPage } from './pages/ConstructionPage';
import { InteriorsPage } from './pages/InteriorsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (path) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    switch (currentPath) {
      case '/services':
        document.title = 'The Journey — MODHAUS — M/Y Realty & Housing';
        break;
      case '/real-estate':
        document.title = 'Real Estate — MODHAUS — M/Y Realty & Housing';
        break;
      case '/construction':
        document.title = 'Construction — MODHAUS — M/Y Realty & Housing';
        break;
      case '/interiors':
        document.title = 'Interiors — MODHAUS — M/Y Realty & Housing';
        break;
      case '/about':
        document.title = 'About — MODHAUS — M/Y Realty & Housing';
        break;
      case '/contact':
        document.title = 'Contact — MODHAUS — M/Y Realty & Housing';
        break;
      default:
        document.title = 'MODHAUS — M/Y Realty & Housing';
    }
  }, [currentPath]);

  const renderPage = () => {
    switch (currentPath) {
      case '/services':
        return <ServicesPage navigate={navigate} />;
      case '/real-estate':
        return <RealEstatePage navigate={navigate} />;
      case '/construction':
        return <ConstructionPage navigate={navigate} />;
      case '/interiors':
        return <InteriorsPage navigate={navigate} />;
      case '/about':
        return <AboutPage navigate={navigate} />;
      case '/contact':
        return <ContactPage navigate={navigate} />;
      case '/':
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <>
      <SiteHeader navigate={navigate} />
      {renderPage()}
      <Footer navigate={navigate} />
    </>
  );
}

export default App;
