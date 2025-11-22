import { createBrowserRouter } from "react-router-dom";

import Layout from "../layouts";
import MainPage from "../pages/main-page/main-page";
import AddVideo from "../pages/add-video/add-video";
import MyPage from "../pages/my-page/my-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
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
]);
