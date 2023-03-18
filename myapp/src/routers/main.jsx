import MainLayout from "@/layout/MainLayout";
import ContactPage from "@/pages/main/ContactPage";
import ForumPage from "@/pages/main/ForumPage";
import HomePage from "@/pages/main/HomePage";
import ProfilePage from "@/pages/main/ProfilePage";
import { element } from "prop-types";
import GuardRoute from "./GuardRoute";

// Xem cấu trúc route ở https://reactrouter.com/en/main/routers/create-browser-router#routes
export default function init(routes) {
  const route = {
    path: "/",

    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "forum",
        element: <ForumPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "profile",
        element: (
          <GuardRoute>
            <ProfilePage></ProfilePage>
          </GuardRoute>
        ),
      },
    ],
  };

  routes.push(route);
}
