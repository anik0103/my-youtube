import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className=" w-1/5 bg-white h-screen leading-10 flex flex-row justify-center">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link>Shorts</Link>
        </li>
        <li>
          <Link>Subscriptions</Link>
        </li>
        <li>
          <Link to="demo">Demo</Link>
        </li>
        <li>
          <Link to="history">History</Link>
        </li>
        <li>
          <Link to="watch">Watch</Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
