import StarRating from "../Helper/StarRating";
function CartFeatured({ path, title }) {
  return (
    <div className="flex items-center gap-x-3">
      <div>
        <img src={path} alt="img-shoe" />
      </div>
      <div className="flex flex-col gap-y-2">
        <h6 className="text-darkGray font-semibold">{title}</h6>
        <StarRating size={14} />
        <div className="flex gap-x-3">
          <p className="text-red">$499</p>
          <p className="text-lightGray opacity-55 line-through">$522</p>
        </div>
      </div>
    </div>
  );
}

export default CartFeatured;
