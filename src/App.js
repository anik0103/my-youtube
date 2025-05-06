import "./App.css";
import MainContainer from "./Components/MainContainer";
import Hamburger from "./Components/Hamburger";
// import Head from './Components/Head';
import Head from "./Components/Head";
import Sidebar from "./Components/Sidebar";
import Icon from "./Components/Icon";
function App() {
  return (
    <div className="App">
      <Head />
      <div className="flex">
        <Sidebar />
        <MainContainer />
      </div>
      <Hamburger />
      <Icon/>
    </div>
  );
}

export default App;
