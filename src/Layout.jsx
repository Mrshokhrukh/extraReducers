
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Foot from "./components/footer/Foot";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Foot />
    </div>
  );
};

export default Layout;
