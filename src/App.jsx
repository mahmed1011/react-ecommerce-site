import React from 'react';
import 'tailwindcss/tailwind.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import TopProduct from './components/Product/TopProduct';
import Banner from './components/Banner/Banner';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import About from './components/About';
import KidsWear from './components/KidsWear';
import NotFound from './components/NotFound';
import ProductDetail from './components/Product/ProductDetail'; // Import ProductDetail component
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import CartPage from './components/Product/CartPage'; // Import CartPage component
import CheckoutPage from './components/Product/CheckoutPage'; // Import CartPage component
import { CartProvider } from './contextApi/CartContext.jsx';

const ProductData = [
  {
    id: 1,
    img: 'path_to_image1',
    title: "Women Ethnic",
    rating: 5.0,
    price: 49.99,
    description: "This is a beautiful ethnic wear for women, made from high-quality fabric.",
  },
  {
    id: 2,
    img: 'path_to_image2',
    title: "Women Western",
    rating: 4.5,
    price: 29.99,
    description: "Comfortable and stylish casual shirt for women.",
  },
  // Add more products...
];

function App() {

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <CartProvider>

        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Product />
              <TopProduct />
              <Banner />
              <Subscribe />
              <Product />
              <Testimonials />
            </>
          } />
          <Route path="/about-us" element={<About />} />
          <Route path="/kids/wear" element={<KidsWear />} />
          <Route path="/product/:title" element={<ProductDetail products={ProductData} />} /> {/* Add this Route */}
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/cart" component={CartPage} /> */}
          <Route path="/cart" element={<CartPage />} /> {/* Define the /cart route */}
          <Route path="/cart" element={<CartPage />} /> {/* Define the /cart route */}
          <Route path="/checkout/" element={<CheckoutPage />} /> {/* Define the /cart route */}


        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
