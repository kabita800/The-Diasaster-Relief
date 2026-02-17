import React from "react";

const HelpForm = () => {
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
      <form className="">

        {/* Full Name */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-md"
              placeholder="Full Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-md"
              placeholder="Email Address"
            />
          </div>
        </div>

        {/* Contact + Gender */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-1 font-medium">Contact</label>
            <input
              type="text"
              className="w-full p-3 border rounded-md"
              placeholder="Phone Number"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <select className="w-full p-3 border rounded-md">
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Age + Province */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-1 font-medium">Age</label>
            <input
              type="number"
              className="w-full p-3 border rounded-md"
              placeholder="Age"
            />
          </div>

          <div>
  <label className="block mb-1 font-medium">Province</label>
  <select
    className="w-full p-3 border rounded-md"
  >
    <option value="">Select Province</option>
    <option value="1">Province 1 (Koshi)</option>
    <option value="2">Province 2 (Madhesh)</option>
    <option value="3">Province 3 (Bagmati)</option>
    <option value="4">Province 4 (Gandaki)</option>
    <option value="5">Province 5 (Lumbini)</option>
    <option value="6">Province 6 (Karnali)</option>
    <option value="7">Province 7 (Sudurpashchim)</option>
  </select>
</div>

        </div>

        {/* District + City */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
  <label className="block mb-1 font-medium">District</label>
  <select className="w-full p-3 border rounded-md">
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


          <div>
            <label className="block mb-1 font-medium">City / Village</label>
            <input
              type="text"
              className="w-full p-3 border rounded-md"
              placeholder="City or Village"
            />
          </div>
        </div>

        {/* Verification Photo */}
        <div className="mb-6">
          <label className="block mb-1 font-medium">
            Verification's Photo (Your ID / Citizenship)
          </label>
          <input
            type="file"
            className="w-full p-3 border rounded-md bg-gray-50"
          />
        </div>

        {/* Disaster Verification Photo */}
        <div className="mb-6">
          <label className="block mb-1 font-medium">
            Verification Photo of Disaster
          </label>
          <input
            type="file"
            className="w-full p-3 border rounded-md bg-gray-50"
          />
        </div>

        {/* Disaster Type + Date */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-1 font-medium">Disaster Type</label>
            <select className="w-full p-3 border rounded-md">
              <option value="">Select Disaster Type</option>
              <option>Flood</option>
              <option>Earthquake</option>
              <option>Landslide</option>
              <option>Fire</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Date & Time</label>
            <input
              type="datetime-local"
              className="w-full p-3 border rounded-md"
            />
          </div>
        </div>


{/* Location Map */}
<div className="mb-6">
  <label className="block mb-1 font-medium">Disaster Location</label>
  <div className="w-full h-64 border rounded-md overflow-hidden">
    <iframe
      title="disaster-location-map"
      src="https://www.openstreetmap.org/export/embed.html?bbox=85.3%2C27.6%2C85.5%2C27.8&layer=mapnik&marker=27.7,85.4"
      width="100%"
      height="100%"
      style={{ border: 0 }}
    ></iframe>
  </div>
</div>

        {/* Submit Button */}
        <button className="w-full bg-teal-700 text-white py-3 rounded-md text-lg font-semibold hover:bg-teal-900 transition">
          Submit Request
        </button>
      </form>
    </div>
     </div>
  );
};

export default HelpForm;
