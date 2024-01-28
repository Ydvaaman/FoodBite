import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
//   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-1">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs w-96">{item.card.info.description}</p>
          </div>
          <div className="">
            <div className="absolute">
              <button className="p-1 mx-7 text-sm rounded-lg font-bold bg-white shadow-lg text-green-800 mt-12 ml-10">
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-32 h-20 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
