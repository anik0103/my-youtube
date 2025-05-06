import Button from "./Button";
import Icon from "./Icon";
import Logo from "./Logo";
import Searchbox from "./Searchbox";

const Head = () => {
  return (
    <div className="head w-full h-20 bg-red-500 flex justify-around items-center px-10">
      <div>
        <Logo />
      </div>
      <div className="flex gap-5">
      <Button />
      <Button />
      <Button />
      <Button />
      </div>
      <Searchbox/>
      <Icon/>
    </div>
  );
};
export default Head;
