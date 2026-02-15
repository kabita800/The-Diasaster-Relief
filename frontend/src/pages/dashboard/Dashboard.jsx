import { Bookmark } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Dashboard() {
  const location = useLocation();

  const activeItem = location.pathname;

  const disasters = [
    "FLOOD",
    "FIRE",
    "CYCLONE",
    "LAND SLIDE",
    "TSUNAMI",
    "EARTHQUAKE",
  ];

  const disasterData = [
    { name: "Flood", cases: 40 },
    { name: "Fire", cases: 25 },
    { name: "Cyclone", cases: 15 },
    { name: "Landslide", cases: 20 },
  ];

  const pieData = [
    { name: "Resolved", value: 65 },
    { name: "Pending", value: 35 },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-100 flex overflow-x-hidden">

      {/* Sidebar */}
      
      {/* Main Content */}
      <main className="flex-1 p-3">
        <h1 className="text-3xl font-bold mb-6 text-center">Disasters</h1>

        {/* Disaster Cards */}
        <div className="grid grid-cols-3 gap-8 mb-10">
          {disasters.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-lg">{item}</h2>
                <span className="text-sm text-gray-500">0.00%</span>
              </div>

              <div className="mt-3 text-2xl font-medium">0</div>

              <button className="mt-4 text-sm underline text-gray-600 hover:text-teal-700">
                View all
              </button>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <h2 className="text-2xl text-center font-bold mb-4">Charts</h2>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="mb-4 font-semibold">Disaster Cases</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={disasterData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="cases" fill="#0f766e" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="mb-4 font-semibold">Status Overview</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  <Cell fill="#0f766e" />
                  <Cell fill="#99f6e4" />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>

      
    </div>
  );
}
