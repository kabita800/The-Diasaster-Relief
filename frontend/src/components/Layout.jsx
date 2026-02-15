import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Bar from "./Bar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100">
      {/* Header */}
      <Bar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
