import { Component } from "react";

const Card = ({ data }) => {
  return (
    <div className="w-auto mx-4 my-2">
      <img
        src={data?.snippet?.thumbnails?.medium?.url}
        alt="Card Image"
        className="rounded-xl"
      />
      <h3 className="w-72 mx-4 mt-4 mb-2 text-ellipsis line-clamp-2 text-left font-bold">
        {data.snippet.title}
      </h3>
      <h5 className="w-72 mx-4 text-left">{data.snippet.channelTitle}</h5>
    </div>
  );
};


// higher order component
// CardHoc is a higher-order component that wraps the Card component
// and adds additional functionality or styling to it.
// It takes a data prop and passes it to the Card component.
// The CardHoc component is used to create a card with a border around it.
export const CardHoc = ({data}) => {
  return (
    <div className="border-2 border-gray-300 rounded-lg">
      <Card data={data} />
    </div>
  );
};

export default Card;
