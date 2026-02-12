import React from "react";
import heroImg from "/src/assets/image.png";
import { useState } from "react";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      {/* HERO SECTION */}
      <div className="relative w-full h-[70vh] overflow-hidden flex bg-teal-700">
        {/* LEFT GREEN DIAGONAL SHAPE */}
        <div
          className="relative w-[40%] h-full text-white flex items-center px-16"
          style={{
            clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)",
          }}
        >
          {/* TEXT CONTENT */}
          <div className="max-w-lg z-20">
            <p className="text-5xl font-bold ">WELCOME</p>
            <h1 className="text-5xl font-extrabold mt-2">TO THEDisaster</h1>
            <h1 className="mt-2 text-5xl font-extrabold">RELIEF</h1>
            <p className="mt-4 text-white/90">Together for Relief,</p>
            <p className="pl-3 text-white/90">Stronger After Every Disaster</p>
          </div>
        </div>

        {/* RIGHT DIAGONAL IMAGE AREA */}
        <div
          className="relative w-[60%] h-full overflow-hidden"
          style={{
            clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <img
            src={heroImg}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* WE CAN HELP SECTION */}
      <div className="text-center mt-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800">
          WE CAN <span className="text-teal-700">HELP</span>
        </h2>
        <p className="italic">Where every problems meet solutions</p>
      </div>

      {/* CARDS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pr-20 pl-20 pb-20 pt-0 mt-10 ">
        <div className="bg-white shadow-lg rounded-xl border-t-4 border-teal-500 p-6">
          <h3 className="text-xl font-bold text-teal-700 text-center">
            MEDICAL KIT
          </h3>
          <p className="mt-3 text-gray-600 justify">
            A medical kit is a crucial part of disaster relief because it
            provides immediate first aid to injured or sick victims before
            professional help arrives. It includes essential supplies like
            bandages, antiseptics, gloves, pain relievers, and basic medicines.
            During disasters, access to hospitals may be limited, so a
            well-prepared medical kit helps prevent infections, control
            bleeding, and stabilize patients. This ensures faster recovery and
            reduces the risk of serious complications.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl  border-t-4 border-teal-500 p-6">
          <h3 className="text-xl font-bold text-teal-700 text-center">
            CLOTHES
          </h3>
          <p className="mt-3 text-gray-600">
            Clothes are an important relief item because disasters often destroy
            homes and personal belongings. Providing clean and appropriate
            clothing helps victims stay warm, dry, and comfortable in harsh
            conditions. It also supports hygiene and dignity, especially for
            children, women, and the elderly. Proper clothing distribution,
            according to size and weather, helps protect survivors from cold,
            heat, and environmental exposure while they recover.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl  border-t-4 border-teal-500 p-6">
          <h3 className="text-xl font-bold text-teal-700 text-center">FOOD</h3>
          <p className="mt-3 text-gray-600">
            Food is one of the most essential resources in disaster management.
            Many victims lose access to kitchens, markets, and clean water,
            making them vulnerable to hunger and malnutrition. Disaster relief
            food packages usually include ready-to-eat meals, dry snacks, rice,
            lentils, canned goods, and drinking water. Providing safe,
            nutritious, and easily distributable food ensures that individuals
            and families can survive until normal food supply systems are
            restored.
          </p>
        </div>
      </div>
    </div>
  );
}
