import { Routes, Route } from "react-router-dom";
import Bar from "./pages/Bar"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Bar />} />
    </Routes>
  );
}

export default App;
