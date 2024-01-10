import StarRating from "../Helper/StarRating";
import ButtonAdd from "./ButtonAdd";
function ItemList() {
  return (
    <div className="flex flex-col items-center gap-y-3 shadow-lg max-w-[95%] md:max-w-[300px] pb-5 mt-10">
      <img src="img-product.png" alt="Prod-item" />
      <h5 className="text-darkBlue text-xl">Nike Air Max 270</h5>
      <StarRating size={18} />
      <div className="flex gap-x-2 md:gap-x-4">
        <p className="text-blue font-bold">$299,43</p>
        <p className="text-lightGray line-through opacity-20">$534,33</p>
        <p className="text-red text-[14px]">24%Off</p>
      </div>
      <ButtonAdd />
    </div>
  );
}

export default ItemList;

// export default function StarRating({
//     maxRating = 5,
//     color = "#fcc419",
//     size = 48,
//     className = "",
//     messages = [],
//     defaultRating = 0,
//     onSetRating,
//   })

// max-w-[95%] md:max-w-[300px] pb-5
