import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Img from "/src/assets/volunteers-giving-donation-other-people_258153-515.avif";

export default function DonationForm() {
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
      const res = await fetch("http://localhost:5000/api/donors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert("Donation form submitted successfully! Wait for admin approval.");
        navigate("/dashboard/donor");
      } else {
        alert("Failed to submit data.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 p-8 bg-gray-100 ">
      
      {/* LEFT IMAGE SECTION */}
      <div className="hidden md:block">
        <img
          src={Img}
          alt="Waterfall"
          className="w-full h-full rounded-bl-3xl rounded-tl-3xl"
        />
      </div>

      {/* RIGHT FORM SECTION */}
      <div className=" bg-white flex items-center justify-center p-6 rounded-tr-3xl rounded-br-3xl">
        <div className="w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-4">
            Help & Donation Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Donor Details</h3>

              <div className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Donor's Full Name"
                  className="input w-full p-3 border rounded-md"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    required
                    placeholder="Province"
                    className="input w-full p-3 border rounded-md"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Donor's Email"
                    className="input w-full p-3 border rounded-md"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    required
                    placeholder="District"
                    className="input w-full p-3 border rounded-md"
                  />
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="City"
                    className="input w-full p-3 border rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="px-8 py-3 bg-teal-700 hover:bg-teal-800 text-white rounded-lg font-semibold transition mx-auto block w-full mt-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    
  );
}
