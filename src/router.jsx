import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ListItems from "./pages/items/ListItems";
import ShowItem from "./pages/items/ShowItem";
import Home from "./pages/Home";
import ItemsLayout from "./pages/Items/Layout";
import UpdateItem from "./pages/Items/UpdateItem";
import CreateItem from "./pages/Items/CreateItem";

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    { index: true, element: <Home /> },
    {
      path: "items",
      element: <ItemsLayout />,
      children: [
        { index: true, element: <ListItems /> },
        { path: "new", element: <CreateItem /> },
        { path: ":id", element: <ShowItem /> },
        { path: ":id/update", element: <UpdateItem /> }
      ]
    }
  ]
}])

export default router;