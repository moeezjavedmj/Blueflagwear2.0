import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import AdminPanel from "./admin/admin";
// import FetchOrder from "./admin/order";
import { Home, Products, Product, AboutPage, ContactPage, Login, Register, PageNotFound } from "./pages";
import PrivacyPolicy from "./pages/privacy";
import Termofservice from "./pages/termofservice";
import Category from "./components/category/categories";
import { Footer, Navbar } from './components';

function App() {
  return (
      <BrowserRouter>
        {/* <Provider store={store}> */}
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/checkout" element={<Checkout />} /> */}
            {/* <Route path="/admin" element={<AdminPanel />} /> */}
            {/* <Route path="/order" element={<FetchOrder />} /> */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/termofservice" element={<Termofservice />} />
            {/*<Route path="/category" element={<Category />} />*/}
            <Route path="/categories" element={<Category />} />


            {/* Route for displaying products within a specific category */}
            <Route path="/categories/:category" element={<Category />} />

          </Routes>
          <Footer/>
        {/* </Provider> */}
      </BrowserRouter>
  );
}

export default App;
