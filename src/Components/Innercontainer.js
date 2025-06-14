import Card, { CardHoc } from "./Card";
import Button from "./Button";
import { useState } from "react";
import { useEffect } from "react";
import { API_URI_YT } from "../Utiles/Constant";
// import ShimmerCard from "./ShimmerCard";
import Shimmer from "./Shimmer";
import CategorySlider from "./CategorySlider";
import { Link } from "react-router-dom";
const InnerContainer = () => {
  const [apidata, setApiData] = useState([]);
  useEffect(() => {
    getapi();
  }, []);
  const getapi = async () => {
    const response = await fetch(API_URI_YT);
    const YouTube = await response.json();
    setApiData(YouTube.items);
  };
  if (apidata.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="main-container w-4/5 bg-white">
      {/* <div className="flex justify-evenly items-center h-20 bg-white shadow-xl sticky z-1">
        <ul>
          <Button />
        </ul>
      </div> */}
      <CategorySlider />
      <div className="card-container flex justify-evenly flex-wrap">
        {/* Shortcircuit operator using && */}
        {apidata.length && <CardHoc data={apidata[0]} />}

        {apidata.map((items) => (
          <div>
            <Link to={`/watch?v=${items.id.videoId}`}>
              <Card data={items} key={items.id} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default InnerContainer;
