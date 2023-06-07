import InfoPage from "pages/InfoPage";
import IstanbulQoL from "pages/IstanbulQoL";
import MyLifeQoL from "pages/MyLifeQoL";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IstanbulQoL />,
  },
  {
    path: "/info",
    element: <InfoPage />,
  },
  {
    path: "/mylifequality",
    element: <MyLifeQoL />,
  },
]);

export { router };
