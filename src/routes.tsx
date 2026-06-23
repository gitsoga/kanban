import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import TopPage from "./features/pages/TopPage";
import TaskList from "./features/pages/TaskList";
import TaskDetail from "./features/pages/TaskDetail";

const routeBasic = createBrowserRouter([
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

export default routeBasic;
