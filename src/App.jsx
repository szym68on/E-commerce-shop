import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Belt from "./pages/Belt";
import Bags from "./pages/Bags";
import Sneakers from "./pages/Sneakers";
import Contact from "./pages/Contact";
import BagsMain from "./components/Main/BagsMain";
import AllMain from "./components/Main/AllMain";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<AllMain />} />
          <Route path="All" element={<AllMain />} />
          <Route path="bagsMain" element={<BagsMain />} />
        </Route>
        <Route path="belt" element={<Belt />} />
        <Route path="bags" element={<Bags />} />
        <Route path="sneakers" element={<Sneakers />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
