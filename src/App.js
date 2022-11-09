import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "../src/routes/Home.jsx"
function App() {
  const router = createBrowserRouter([
    {
      path: "home/",
      element: <Home />,
      // element: <Root />,
      errorElement: <ErrorPage />,
    },
  
  ]);
  return (
    <div className="App">
      {/*    
      <header>
        <NavBar />
      </header>
      <main>
        <LayOut />
      </main> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
