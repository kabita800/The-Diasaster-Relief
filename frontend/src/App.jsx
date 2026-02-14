import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import PublicLayout from "./components/PublicLayout";

import Home from "./pages/public/Home";
import Aboutus from "./pages/public/Aboutus";
import Contact from "./pages/public/Contact";
import HelpForm from "./pages/public/DonationForm";

import Dashboard from "./pages/dashboard/Dashboard";
import Disasters from "./pages/dashboard/Disasters";
import Mails from "./pages/dashboard/Mails";
import Victim from "./pages/dashboard/Victim";
import Donor from "./pages/dashboard/Donor";
import DonationForm from "./pages/public/DonationForm";

export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/donationform" element={<DonationForm />} />
      </Route>

      {/* Dashboard */}
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="disasters" element={<Disasters />} />
        <Route path="mails" element={<Mails />} />
        <Route path="victim" element={<Victim />} />
        <Route path="donor" element={<Donor />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}
