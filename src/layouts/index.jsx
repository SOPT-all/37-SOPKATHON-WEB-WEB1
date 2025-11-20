import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
