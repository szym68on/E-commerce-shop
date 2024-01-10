function CartShop() {
  return (
    <div className="hidden md:flex relative">
      <img src="Cart.png" alt="Card" />
      <p className="bg-red w-4 h-4 flex items-center justify-center rounded-full text-white text-[10px] absolute top-[-5px] right-[-5px]">
        2
      </p>
    </div>
  );
}

export default CartShop;
