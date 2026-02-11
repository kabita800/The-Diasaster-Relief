import { Routes, Route } from "react-router-dom";
import Bar from "./pages/Bar";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Bar />   {/* Navbar */}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />   {/* Footer on all pages */}

    </div>
  );
}

export default App;
