import { Routes, Route } from "react-router-dom";
import Bar from "./pages/Bar"
import Home from "./pages/Home"
function App() {
  return (
    
      <>
      <Bar /> 
      <Routes>
        <Route path="/" element={<Home />} />   
      </Routes>
    </>
  );
}

export default App;
