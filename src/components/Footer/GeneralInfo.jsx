import Logo from "../NavBar/Logo";
import ParagraphComponent from "./ParagraphComponent";
import ProductInfo from "./ProductInfo";
function GeneralInfo() {
  return (
    <div className="w-[100%] ml-5 mt-10 flex flex-col md:flex-row items-center">
      <div className=" w-[90%] md:w-[30%]">
        <Logo />
        <ParagraphComponent />
      </div>
      <ProductInfo />
      <ProductInfo />
      <ProductInfo />
    </div>
  );
}

export default GeneralInfo;
