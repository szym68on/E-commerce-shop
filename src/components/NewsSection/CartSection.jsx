function CartSection({ path, title, text }) {
  return (
    <div className="flex w-[30%] justify-end gap-x-3 items-center">
      <div>
        <img src={path} alt="ImgLogo" />
      </div>
      <div className="w-2/3">
        <h6 className="text-darkGray font-semibold">{title}</h6>
        <p className="text-lightGray opacity-55 text-[14px]">{text}</p>
      </div>
    </div>
  );
}

export default CartSection;
