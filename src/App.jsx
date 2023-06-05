import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "router";
import { MainProvider } from "context/mapContext";
import { ChartProvider } from "context/chartContext";

function App() {
  return (
    <MainProvider>
      <ChartProvider>
        <RouterProvider router={router} />
      </ChartProvider>
    </MainProvider>
  );
}

export default App;
