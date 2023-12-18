import Navbar from '@/components/shared/Navbar';

const Home = ({ params: { locale } }) => {
  return (
    <main>
      <Navbar language={locale} />
    </main>
  );
};

export default Home;
