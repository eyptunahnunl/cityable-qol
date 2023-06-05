import Home from "pages/Home";
import IstanbulQoL from "pages/IstanbulQoL";
import MyLifeQoL from "pages/MyLifeQoL";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IstanbulQoL />,
  },
  {
    path: "/istanbulqol",
    element: <IstanbulQoL />,
  },
  {
    path: "/mylifequality",
    element: <MyLifeQoL />,
  },
]);

export { router };
