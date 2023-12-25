import Hero from '@/components/home/Hero';
import WhyUs from '@/components/home/WhyUs';

const Home = ({ params: { locale } }) => {
  return (
    <main>
      <Hero language={locale} />
      <WhyUs language={locale} />
    </main>
  );
};

export default Home;
