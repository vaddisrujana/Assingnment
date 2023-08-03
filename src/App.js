import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Travel from "./components/Travel";
import Tour from "./components/Tour";
import FirstDay from "./components/FirstDay";
import SecondDay from "./components/SecondDay";
import ThirdDay from "./components/ThirdDay";
import ForthDay from "./components/ForthDay";
import Overview from "./components/Overview";
import TermsAndConditions from "./components/TermsAndConditions";
import Contact from "./components/Contact";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Travel />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/first-day" element={<FirstDay />} />
      <Route path="/second-day" element={<SecondDay />} />
      <Route path="/third-day" element={<ThirdDay />} />
      <Route path="/forth-day" element={<ForthDay />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/Terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
export default App;
