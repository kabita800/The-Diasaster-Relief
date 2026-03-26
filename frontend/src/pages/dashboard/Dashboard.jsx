import { Bookmark } from "lucide-react";
import { useState, useEffect } from "react";
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

  const [disasterData, setDisasterData] = useState([]);
  const [totals, setTotals] = useState({ disasters: 0, victims: 0, donors: 0 });

  useEffect(() => {
    fetch("http://localhost:5000/api/stats")
      .then(res => res.json())
      .then(data => {
        setDisasterData(data.chartData || []);
        setTotals(data.totals || { disasters: 0, victims: 0, donors: 0 });
      })
      .catch(err => console.error(err));
  }, []);

  const topCards = [
    { title: "Total Disasters", count: totals.disasters },
    { title: "Registered Victims", count: totals.victims },
    { title: "Registered Donors", count: totals.donors },
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

        {/* Dynamic Data Cards */}
        <div className="grid grid-cols-3 gap-8 mb-10">
          {topCards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-lg">{item.title}</h2>
              </div>
              <div className="mt-3 text-2xl font-medium">{item.count}</div>
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
