import { createBrowserRouter } from "react-router-dom";

import Layout from "../layouts";
import MainPage from "../pages/main-page/main-page";
import AddVideo from "../pages/add-video/add-video";
import MyPage from "../pages/my-page/my-page";
import { SignUpPage } from "../pages/sign-up/sign-up";
import { Splash } from "../pages/splash/splash";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Splash />,
      },
      {
        path: "/main",
        element: <MainPage />,
      },
      {
        path: "add-video",
        element: <AddVideo />,
      },
      {
        path: "my-page",
        element: <MyPage />,
      },
    ],
  },
  {
    path: "sign-up",
    element: <SignUpPage />,
  },
]);
