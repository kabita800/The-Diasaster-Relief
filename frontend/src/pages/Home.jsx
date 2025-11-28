import React from "react"

export default function Home() {
  return (
   <div className="w-full min-h-screen">

  {/* HERO SECTION */}
  <div className="relative w-full h-[70vh] overflow-hidden flex">

    {/* LEFT ORANGE DIAGONAL SHAPE */}
    <div
      className="relative w-[50%] h-full bg-gradient-to-r from-orange-500 to-orange-300 text-white flex items-center px-16"
      style={{
        clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)",
      }}
    >
      {/* TEXT CONTENT */}
      <div className="max-w-lg z-20">
        <p className="text-lg font-semibold tracking-widest">WELCOME</p>
        <h1 className="text-5xl font-extrabold mt-2">TO SERVIVE</h1>
        <p className="mt-4 text-white/90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>

        <button className="mt-6 bg-white text-orange-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-50">
          CREATE YOUR PLAN
        </button>
      </div>
    </div>

    {/* RIGHT DIAGONAL IMAGE AREA */}
    <div
      className="relative w-[50%] h-full overflow-hidden "
      style={{
        clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <img
        src="/src/assets/rescue-team-navigating-flooded-residential-260nw-2511305493.jpg"
        alt="hero"
        className="w-full h-full object-cover"
      />
    </div>

  </div>

  {/* WE CAN HELP SECTION */}
  <div className="text-center mt-16 px-4">
    <h2 className="text-3xl font-bold text-gray-800">
      WE CAN <span className="text-orange-500">HELP</span>
    </h2>
  </div>

  {/* CARDS SECTION */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 mt-10 pb-20">

    <div className="bg-white shadow-lg rounded-xl border-t-4 border-orange-500 p-6">
      <h3 className="text-xl font-bold text-orange-500">PLANNER</h3>
      <p className="mt-3 text-gray-600">Lorem ipsum dolor sit amet.</p>
      <button className="mt-4 text-orange-500 font-semibold">READ MORE</button>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-6">
      <h3 className="text-xl font-bold text-orange-500">COURSE</h3>
      <p className="mt-3 text-gray-600">Lorem ipsum dolor sit amet.</p>
      <button className="mt-4 text-orange-500 font-semibold">READ MORE</button>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-6">
      <h3 className="text-xl font-bold text-orange-500">RADIO</h3>
      <p className="mt-3 text-gray-600">Lorem ipsum dolor sit amet.</p>
      <button className="mt-4 text-orange-500 font-semibold">READ MORE</button>
    </div>

  </div>

</div>
  )}