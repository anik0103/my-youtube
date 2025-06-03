// import Button from "./Button";
import Hamburger from "./Hamburger";
import Icon from "./Icon";
import Logo from "./Logo";
import Searchbox from "./Searchbox";
import Button from "./Button";

const Head = () => {
  return (
    <div className="head w-full bg-white justify-between items-center px-10 sticky top-0 z-10 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Hamburger />
          <Logo />
        </div>
        <Searchbox />
        <Icon />
      </div>
    </div>
  );
};
export default Head;
