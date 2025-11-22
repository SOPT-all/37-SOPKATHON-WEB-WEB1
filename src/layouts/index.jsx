import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/footer";

const Layout = () => {
  const location = useLocation();
  const hideFooter =
    location.pathname === "/add-video" ||
    location.pathname === "/ai-score" ||
    location.pathname === "/";

  return (
    <div
      style={{
        maxWidth: "37.5rem",
        minHeight: "100vh",
        margin: "0 auto",
        position: "relative",
        backgroundColor: "transparent",
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
