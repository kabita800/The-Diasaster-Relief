import React from "react";

export default function DonationForm() {
  return (
    <div className="min-h-screen grid md:grid-cols-2 p-8 bg-gray-100 ">
      
      {/* LEFT IMAGE SECTION */}
      <div className="hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="Waterfall"
          className="w-full h-full rounded-3xl"
        />
      </div>

      {/* RIGHT FORM SECTION */}
      <div className=" bg-white flex items-center justify-center p-6 rounded-3xl">
        <div className="w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-4">
            Help & Donation Form
          </h2>
          <form className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Donor Details</h3>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Donor's Full Name"
                  className="input"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Donor's Mobile Number"
                    className="input"
                  />
                  <input
                    type="email"
                    placeholder="Donor's Email"
                    className="input"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Home Address"
                  className="input"
                />

                <select className="input">
                  <option>Select Donation Type</option>
                  <option>Money</option>
                  <option>Food</option>
                  <option>Clothes</option>
                  <option>Medical Supplies</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* ================= VICTIM DETAILS ================= */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Victim Details</h3>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Victim's Full Name"
                  className="input"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Victim's Mobile Number"
                    className="input"
                  />
                  <input
                    type="email"
                    placeholder="Victim's Email"
                    className="input"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Victim's Address"
                  className="input"
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="px-8 py-3 bg-teal-700 hover:bg-teal-800 text-white rounded-lg font-semibold transition mx-auto block"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    
  );
}
