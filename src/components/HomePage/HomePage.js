import useAuth from 'hooks/useAuth';
import HomeAuthNav from 'components/HomeAuthNav';
import Footer from 'components/Footer';
import css from './HomePage.module.css';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <section className={css.section__home}>
        <h1 className={css.home__title}>Welcome to PhoneBook</h1>
        {!isLoggedIn && <HomeAuthNav />}
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
