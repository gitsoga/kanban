import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import TopPage from "./features/pages/TopPage";
import TaskList from "./features/pages/TaskList";

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
    ],
  },
]);

export default routeBasic;
