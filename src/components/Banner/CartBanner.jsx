function CartBanner({ lastChild, title, price, path, discount }) {
  const totalPrice = ((price * 100) / (100 - discount)).toFixed(2);

  return (
    <div className={`${lastChild ? "cartBannerLastChild" : "cartBanner"} px-4`}>
      <div className="flex justify-between mt-4 items-center mb-3">
        <h3 className="text-darkGray text-2xl">{title} </h3>
        <p className="text-blue text-[20px] font-semibold">${price}</p>
      </div>

      <img src={path} alt="productImage"></img>

      <div className="w-[100%] flex justify-center gap-x-5 items-center mt-2">
        <p className="text-lightGray line-through text-[14px]">${totalPrice}</p>
        <p className="text-red font-semibold text-[18px]">{discount}% Off</p>
      </div>
    </div>
  );
}

export default CartBanner;
