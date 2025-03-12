'use client';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import OurProduct from './components/OurProduct/OurProduct';
import OurWorks from './components/OurWorks/OurWorks';
import ButtonWithPopup from './components/resuable/buttons/ButtonWithPopup';
import ScrollToTopButton from './components/resuable/buttons/ScrollToTopButton';
import TelegramButton from './components/resuable/buttons/TelegramButton';
import './globals.css';
export default function Home() {
  return (
    <div className="container">
      <Header />
      <OurProduct />
      <OurWorks />
      <Contacts />
      <Footer />
      <ButtonWithPopup />
      <ScrollToTopButton />
      <TelegramButton />
    </div>
  );
}
