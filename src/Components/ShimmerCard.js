const ShimmerCard = () => {
  return (
    < div className="flex flex-col p-4">
      <div className="shimmer-card w-80 h-44 bg-gray-200 rounded-lg animate-pulse"></div>
      <h3 className="w-52 h-4 mx-4 mt-4 mb-2 bg-gray-300"></h3>
      <h5 className="w-32 h-4 mx-4 bg-gray-400"></h5>
    </div>
  );
};

export default ShimmerCard;
