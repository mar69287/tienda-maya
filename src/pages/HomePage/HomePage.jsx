import AboutCard from '../../components/AboutCard';
import BenefitsGrid from '../../components/BenefitsGrid';
import ClothingCard from '../../components/ClothingCard';
import Footer from '../../components/Footer';
import HeroCarousel from '../../components/HeroCarousel';
import KitchenCard from '../../components/KitchenCard';

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <BenefitsGrid />
      <AboutCard />
      <Footer />
    </>
  );
};

export default HomePage;
