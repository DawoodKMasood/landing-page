import Hero from '@/components/home/Hero';
import Navbar from '@/components/shared/Navbar';

const Home = ({ params: { locale } }) => {
  return (
    <main>
      <Navbar language={locale} />
      <Hero language={locale} />
    </main>
  );
};

export default Home;
