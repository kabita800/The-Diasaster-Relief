import { Outlet } from "react-router-dom";
import Bar from "./Bar";
import Footer from "./Footer";

export default function PublicLayout() {
  return (
    <>
      <Bar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
