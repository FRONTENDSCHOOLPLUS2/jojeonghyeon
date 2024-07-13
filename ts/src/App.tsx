import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import router from "@/routes";

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
