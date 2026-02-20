import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import HumanCapital from "./pages/HumanCapital";
import Ethics from "./pages/Ethics";
import NotFound from "./pages/NotFound";
import PageTransition from "./components/PageTransition";

export default function App() {
  return (
    <>
      <Navbar />

      <PageTransition>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/human-capital" element={<HumanCapital />} />
    <Route path="/ethics" element={<Ethics />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</PageTransition>

<ScrollToTopButton />
      <Footer />
    </>
  );
}
