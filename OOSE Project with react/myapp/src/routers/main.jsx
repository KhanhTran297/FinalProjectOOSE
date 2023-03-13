import MainLayout from "@/layout/MainLayout";
import ContactPage from "@/pages/main/ContactPage";
import ForumPage from "@/pages/main/ForumPage";
import HomePage from "@/pages/main/HomePage";

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
    ],
  };

  routes.push(route);
}
