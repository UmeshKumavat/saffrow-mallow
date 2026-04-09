import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import ShowcaseSection from './sections/ShowcaseSection';
import FinalCtaSection from './sections/FinalCtaSection';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <FinalCtaSection />
      </main>
    </div>
  );
}

export default App;
