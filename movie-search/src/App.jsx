import { RouterProvider } from "react-router-dom"; // RouterProvider importieren
import "./App.css";
import { router } from "./utlils/router";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
