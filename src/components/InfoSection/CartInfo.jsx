function CartInfo({ path, title, text }) {
  return (
    <div className="md:w-[30%] w-[80%] flex flex-col items-center space-y-3 border-b-[1px] border-dashed border-blue md:border-b-0 pb-3">
      <img src={path} alt="photoImg" />
      <h5 className="text-xl text-darkBlue">{title}</h5>
      <p className="text-center">{text}</p>
    </div>
  );
}

export default CartInfo;
