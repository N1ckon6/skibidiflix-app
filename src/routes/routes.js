import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";
import DetailsPage from "../pages/DetailsPage";
import SearchPage from "../pages/SearchPage";
import MyListPage from "../pages/MyListPage";
import BrowseByLanguage from "../pages/BrowseByLanguage";
import KidsPage from "../pages/KidsPage";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":type",
        element: <ExplorePage />,
      },
      {
        path: ":type/:id",
        element: <DetailsPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "my-list",
        element: <MyListPage />,
      },
      {
        path: "browse",
        element: <BrowseByLanguage />,
      },
      {
        path: "kids",
        element: <KidsPage />,
      },
      {
        path: "profile/:userId",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;
