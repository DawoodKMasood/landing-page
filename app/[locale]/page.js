import { Banner, Hero, WhyUs } from '@/components';
const Home = ({ params: { locale } }) => {
  return (
    <main>
      <Hero language={locale} />
      <WhyUs language={locale} />
      <Banner language={locale} />
    </main>
  );
};

export default Home;
