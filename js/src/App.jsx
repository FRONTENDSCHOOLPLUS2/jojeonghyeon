import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
