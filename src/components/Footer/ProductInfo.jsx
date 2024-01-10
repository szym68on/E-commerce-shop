function ProductInfo() {
  return (
    <div className=" w-[90%] md:w-[30%] flex flex-col items-center md:mt-0 mt-10">
      <h5 className="text-darkBlue font-semibold text-[18px] mb-2">Products</h5>
      <ul className="flex flex-col gap-y-1">
        <li>Overwiev</li>
        <li>Feature</li>
        <li>Solutions</li>
        <li>Tutorials</li>
        <li>Pricins</li>
      </ul>
    </div>
  );
}

export default ProductInfo;
