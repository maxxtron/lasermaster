'use client';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import OurProduct from './components/OurProduct/OurProduct';
import OurWorks from './components/OurWorks/OurWorks';
import './globals.css';
export default function Home() {
  return (
    <div className='container'>
      <Header />
      <OurProduct />
      <OurWorks />
      <Footer />
    </div>
  );
}
