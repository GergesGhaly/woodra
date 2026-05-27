import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Hero from "./Hero";
import Store from "./Store";
import ProductDetails from "./ProductDetails";
import QASection from "./QASection";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Store />
      <QASection />
      <Footer />

    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;