import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const location = useLocation();
  const activeItem = location.pathname;
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Disasters", path: "/dashboard/disasters" },
    { name: "Victim", path: "/dashboard/victim" },
    { name: "Donor", path: "/dashboard/donor" },
    { name: "DeliveryTrack", path: "/dashboard/deliverytrack" },
  ];

  return (
    <aside className="w-50 bg-white border-r shadow-sm flex flex-col justify-between">
      <div>
        <div className="p-6 font-bold text-xl text-teal-700 ">Dashboard</div>
        <ul className="px-4 space-y-2 flex flex-col items-start">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`inline-flex w-fit px-8 py-2 rounded-lg transition 
                  ${
                    activeItem === link.path
                      ? "bg-teal-700 text-white font-semibold"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 mt-auto mb-4 border-t border-gray-100">
        {user && (
          <button 
            onClick={handleLogout}
            className="w-full py-2 bg-red-50 text-red-600 font-semibold rounded-lg hover:bg-red-100 transition shadow-sm"
          >
            Logout
          </button>
        )}
      </div>
    </aside>
  );
}
