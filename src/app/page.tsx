'use client';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import OurProduct from './components/OurProduct/OurProduct';
import OurWorks from './components/OurWorks/OurWorks';
import ButtonWithPopup from './components/resuable/Buttons/ButtonWithPopup';
import ScrollToTopButton from './components/resuable/Buttons/ScrollToTopButton';
import TelegramButton from './components/resuable/Buttons/TelegramButton';
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
