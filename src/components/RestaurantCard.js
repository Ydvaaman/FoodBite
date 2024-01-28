import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="ml-10 p-4 w-64 rounded-lg hover:shadow-2xl flex flex-col">
      <img
        className="rounded-md overflow-hidden min-h-[180px] h-20 object-cover overlay"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold p-1 text-lg">{name}</h3>
      <h4 className="text-base truncate">{cuisines.join(", ")}</h4>
      <h5 className="">{avgRating}⭐</h5>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

// Higher order Component
// input- RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
   return (props) => {
    return (
      <div>
        <label className="absolute bg-green-400 text-black p-1 m-5 rounded-md">Open</label>
        <RestaurantCard {...props}/>
      </div>
    );
   }
}


export default RestaurantCard;
