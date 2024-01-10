import TitleSection from "./TitleSection";
import CartSection from "./CartSection";
function NewsSection() {
  return (
    <section className=" hidden md:flex flex-col mx-auto mt-44 gap-y-10 gap-x-5 justify-between">
      <TitleSection title="LATEST NEWS" />
      <div className=" w-[100%] flex items-center justify-center">
        <CartSection
          path="nike-logo.png"
          title="Fashion Industry"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, doloribus"
        />
        <CartSection
          path="figma-logo.png"
          title="Best Design Tools"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, doloribus"
        />
        <CartSection
          path="kronos-logo.png"
          title="HR Community"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, doloribus"
        />
      </div>
    </section>
  );
}

export default NewsSection;
