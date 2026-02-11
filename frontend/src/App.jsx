import { Routes, Route } from "react-router-dom";
import Bar from "./pages/Bar"
import Home from "./pages/Home"
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";

function App() {
  return (
    
      <>
      <Bar /> 
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/aboutus" element={<Aboutus />} /> 
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;