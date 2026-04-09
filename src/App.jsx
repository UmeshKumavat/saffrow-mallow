import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import ShowcaseSection from './sections/ShowcaseSection';
import FinalCtaSection from './sections/FinalCtaSection';

function App() {
  const [isLaunched, setIsLaunched] = useState(false);

  return (
    <div className="app-shell">
      <Header />
      <main>
        <HeroSection onLaunch={() => setIsLaunched(true)} />
        {isLaunched && (
          <>
            <FeaturesSection />
            <ShowcaseSection />
            <FinalCtaSection />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
