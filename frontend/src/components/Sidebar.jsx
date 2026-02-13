import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const activeItem = location.pathname;

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Disasters", path: "/dashboard/disasters" },
    { name: "Mails", path: "/dashboard/mails" },
    { name: "Victim", path: "/dashboard/victim" },
    { name: "Donor", path: "/dashboard/donor" },
  ];

  return (
    <aside className="w-50 bg-white border-r shadow-sm flex flex-col">
      <div className="p-6 font-bold text-xl text-teal-700 ">Dashboard</div>
     <ul className="flex-1 px-4 space-y-2 flex flex-col items-start">
  {links.map((link) => (
    <li key={link.name}>
      <Link
        to={link.path}
        className={`inline-flex w-fit px-12 py-2 rounded-lg transition 
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

    </aside>
  );
}
