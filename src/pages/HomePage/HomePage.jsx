import AboutCard from '../../components/AboutCard';
import BenefitsGrid from '../../components/BenefitsGrid';
import ClothingCard from '../../components/ClothingCard';
import HeroCarousel from '../../components/HeroCarousel';
import KitchenCard from '../../components/KitchenCard';

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <BenefitsGrid />
      <AboutCard />
    </>
  );
};

export default HomePage;
