import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RoleRoute from "./components/RoleRoute";

import Layout from "./components/Layout";
import PublicLayout from "./components/PublicLayout";

import Home from "./pages/public/Home";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Aboutus from "./pages/public/Aboutus";
import Contact from "./pages/public/Contact";

import Dashboard from "./pages/dashboard/Dashboard";
import Disasters from "./pages/dashboard/Disasters";
import Victim from "./pages/dashboard/Victim";
import Donor from "./pages/dashboard/Donor";
import DonationForm from "./pages/public/DonationForm";
import HelpForm from "./pages/Victim.jsx/HelpForm";
import DeliveryTrack from "./pages/dashboard/DeliveryTrack";
import Services from "./pages/public/Services";

export default function App() {
  return (
    <AuthProvider>
      <Routes>

        {/* ================= PUBLIC PAGES ================= */}
        <Route element={<PublicLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />

          {/* DONOR ONLY */}
          <Route
            path="/donationform"
            element={
              <RoleRoute allowedRoles={["donor"]}>
                <DonationForm />
              </RoleRoute>
            }
          />

          {/* VICTIM ONLY */}
          <Route
            path="/helpform"
            element={
              <RoleRoute allowedRoles={["victim"]}>
                <HelpForm />
              </RoleRoute>
            }
          />

        </Route>


        {/* ================= AUTH ================= */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        {/* ================= DASHBOARD ================= */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="disasters" element={<Disasters />} />
          <Route path="victim" element={<Victim />} />
          <Route path="donor" element={<Donor />} />
          <Route path="deliverytrack" element={<DeliveryTrack />} />
        </Route>


        {/* ================= 404 PAGE ================= */}
        <Route
          path="*"
          element={
            <h1 className="font-bold text-3xl text-center text-red-400 p-30">
              404 Not Found
            </h1>
          }
        />

      </Routes>
    </AuthProvider>
  );
}