import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";

const Layout = () => {
  return (
    <div
      style={{
        maxWidth: "372px",
        minHeight: "100vh",
        margin: "0 auto",
        position: "relative",
        backgroundColor: "#fff",
      }}
    >
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
