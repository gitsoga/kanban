import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { TopPage } from "./pages/TopPage";
import { TaskList } from "./pages/TaskList";
import { TaskDetail } from "./pages/TaskDetail";

export const routeBasic = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TopPage />,
      },
      {
        path: "list",
        element: <TaskList />,
      },
      {
        path: "tasks/:id",
        element: <TaskDetail />,
      },
    ],
  },
]);
