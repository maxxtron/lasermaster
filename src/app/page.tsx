'use client';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import OurProduct from './components/OurProduct/OurProduct';
import OurWorks from './components/OurWorks/OurWorks';
export default function Home() {
  return (
    <div>
      <Header />
      <OurProduct />
      <OurWorks />
      <Footer />
    </div>
  );
}
