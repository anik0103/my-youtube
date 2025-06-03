const Button = (props) => {
  const btncontent = [
    "All",
    "Music",
    "Live",
    "Shorts",
    "News",
    "Gaming",
    "Sports",
    "Comedy",
    "Education",
    "Travel & Events",
    "Fashion & Beauty",
    "Learning",
    "Entertainment",
    "Science & Technology",
    "Autos & Vehicles",
  ];
  return (
    <>
      {btncontent.map((item,index) => {
        return (
          <button className="w-auto border rounded-full p-2 m-2 bg-slate-300 hover:bg-slate-400 mx-3 my-2" key={index}>
            {item}
          </button>
        );
      })}
    </>
  );
};
export default Button;
