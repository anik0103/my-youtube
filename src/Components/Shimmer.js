import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
    const shimmerItems=[1,2,3,4,5,6,7,8,9]
    return (
        <div className="flex justify-evenly flex-wrap">
         {shimmerItems.map((items)=>{
            
            return(
                <ShimmerCard key={items}/>
            );
         })}
        </div>
    );
    }
export default Shimmer;