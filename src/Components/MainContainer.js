import Sidebar from "./Sidebar";
// import InnerContainer from "./Innercontainer";
import { Outlet } from "react-router-dom";



const MainContainer = () => {
  return (
    <div className="flex">
        <Sidebar />
        {/* <InnerContainer /> */}
        <Outlet/>
      </div>
  );
};

export default MainContainer;
