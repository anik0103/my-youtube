import Sidebar from "./Sidebar";
import InnerContainer from "./Innercontainer";



const MainContainer = () => {
  return (
    <div className="flex">
        <Sidebar />
        <InnerContainer />
      </div>
  );
};

export default MainContainer;
