import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HelpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    province: "",
    district: "",
    city: "",
    date: new Date().toISOString().split("T")[0],
    time: new Date().toTimeString().split(" ")[0].slice(0, 5)
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/victims", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert("Help request submitted successfully! Wait for admin approval.");
        navigate("/dashboard/victim");
      } else {
        alert("Failed to submit data.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 ">
      {/* Top Logo */}
      <div className="max-w-4xl mx-auto mt-0 bg-white p-8 rounded-lg shadow">

      <div className="flex justify-center mb-6 ">
        <h1 className="text-3xl font-bold text-teal-900">THEDisaster RELIEF</h1>
      </div>

      {/* Header */}
      <div className="max-w-3xl mx-auto bg-green-100 text-center mb-4 p-5 rounded-md shadow">
        <h2 className="text-xl font-semibold">Help Desk</h2>
        <p className="text-gray-600 text-sm italic">
          Please fill out this form. Donors will contact you shortly.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="">

        {/* Full Name */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
              placeholder="Full Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
              placeholder="Email Address"
            />
          </div>
        </div>

        {/* Province */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-1 font-medium">Province</label>
            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
            >
              <option value="">Select Province</option>
              <option value="Province 1 (Koshi)">Province 1 (Koshi)</option>
              <option value="Province 2 (Madhesh)">Province 2 (Madhesh)</option>
              <option value="Province 3 (Bagmati)">Province 3 (Bagmati)</option>
              <option value="Province 4 (Gandaki)">Province 4 (Gandaki)</option>
              <option value="Province 5 (Lumbini)">Province 5 (Lumbini)</option>
              <option value="Province 6 (Karnali)">Province 6 (Karnali)</option>
              <option value="Province 7 (Sudurpashchim)">Province 7 (Sudurpashchim)</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">District</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
            >
              <option value="">Select District</option>
              {/* Province 1 */}
              <option>Bhojpur</option>
              <option>Dhankuta</option>
              <option>Ilam</option>
              <option>Jhapa</option>
              <option>Khotang</option>
              <option>Morang</option>
              <option>Okhaldhunga</option>
              <option>Panchthar</option>
              <option>Sankhuwasabha</option>
              <option>Solukhumbu</option>
              <option>Sunsari</option>
              <option>Taplejung</option>
              <option>Tehrathum</option>
              <option>Udayapur</option>
              {/* Province 2 */}
              <option>Bara</option>
              <option>Dhanusha</option>
              <option>Mahottari</option>
              <option>Parsa</option>
              <option>Rautahat</option>
              <option>Saptari</option>
              <option>Sarlahi</option>
              <option>Siraha</option>
              {/* Bagmati Province */}
              <option>Bhaktapur</option>
              <option>Chitwan</option>
              <option>Dhading</option>
              <option>Dolakha</option>
              <option>Kathmandu</option>
              <option>Kavrepalanchok</option>
              <option>Lalitpur</option>
              <option>Makwanpur</option>
              <option>Nuwakot</option>
              <option>Ramechhap</option>
              <option>Rasuwa</option>
              <option>Sindhuli</option>
              <option>Sindhupalchok</option>
              {/* Gandaki Province */}
              <option>Baglung</option>
              <option>Gorkha</option>
              <option>Kaski</option>
              <option>Lamjung</option>
              <option>Manang</option>
              <option>Mustang</option>
              <option>Myagdi</option>
              <option>Nawalpur</option>
              <option>Parbat</option>
              <option>Syangja</option>
              <option>Tanahun</option>
              {/* Lumbini Province */}
              <option>Arghakhanchi</option>
              <option>Banke</option>
              <option>Bardiya</option>
              <option>Dang</option>
              <option>Gulmi</option>
              <option>Kapilvastu</option>
              <option>Nawalparasi (West)</option>
              <option>Palpa</option>
              <option>Pyuthan</option>
              <option>Rolpa</option>
              <option>Rukum (East)</option>
              <option>Rupandehi</option>
              {/* Karnali Province */}
              <option>Dailekh</option>
              <option>Dolpa</option>
              <option>Humla</option>
              <option>Jajarkot</option>
              <option>Jumla</option>
              <option>Kalikot</option>
              <option>Mugu</option>
              <option>Rukum (West)</option>
              <option>Salyan</option>
              <option>Surkhet</option>
              {/* Sudurpashchim Province */}
              <option>Achham</option>
              <option>Baitadi</option>
              <option>Bajhang</option>
              <option>Bajura</option>
              <option>Dadeldhura</option>
              <option>Darchula</option>
              <option>Doti</option>
              <option>Kailali</option>
              <option>Kanchanpur</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-1 font-medium">City / Village</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
              placeholder="City or Village"
            />
          </div>
        </div>

        <button type="submit" className="w-full bg-teal-700 text-white py-3 rounded-md text-lg font-semibold hover:bg-teal-900 transition mt-6">
          Submit Request
        </button>
      </form>
    </div>
    </div>
  );
};

export default HelpForm;
