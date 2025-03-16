import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import "../styles/Layout.scss";

const Layout = () => {
  return (
    <>
      <Nav />
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
