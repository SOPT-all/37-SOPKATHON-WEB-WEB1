import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/footer";

const Layout = () => {
  const location = useLocation();
  const hideFooter =
    location.pathname === "/add-video" || location.pathname === "/ai-score";

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
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
