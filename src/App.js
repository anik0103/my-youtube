import "./App.css";
import MainContainer from "./Components/MainContainer";
// import Hamburger from "./Components/Hamburger";
// import Head from './Components/Head';
import Head from "./Components/Head";
// import CategorySlider from "./Components/CategorySlider";
// import Sidebar from "./Components/Sidebar";
// import Icon from "./Components/Icon";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InnerContainer from "./Components/Innercontainer";
function App() {
  const appRouter = createBrowserRouter([
    {
      // base route
      path: "/",
      element: <MainContainer />,
      children: [
        {
          path: "/",
          element: <InnerContainer/>,
        },
        {
          path: "/history",
          element: <h1>This is history page</h1>,
        },
        {
          path: "/watch",
          element: <h1>This is watch page</h1>,
        }
      ],
    },
    {
      path:"/demo",
      element: <h1>This is demo page</h1>
    }
  ]);
  return (
    <div className="App">
      <Head />
      {/* <CategorySlider/> */}
      {/* <MainContainer /> */}
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
