import TitleSection from "../NewsSection/TitleSection";
import CartFeatured from "./CartFeatured";
function FeaturedSection() {
  return (
    <section className="hidden md:flex flex-col mx-auto mt-44 gap-y-10 gap-x-5 justify-around w-[90%]">
      <TitleSection title="FEATURED PRODUCTS" />
      <div className="flex justify-between">
        <CartFeatured
          path="shoe-featured.png"
          title="Blue Swade Nike Sneakers"
        />
        <CartFeatured
          path="shoe-featured.png"
          title="Blue Swade Nike Sneakers"
        />
        <CartFeatured
          path="shoe-featured.png"
          title="Blue Swade Nike Sneakers"
        />
      </div>
    </section>
  );
}

export default FeaturedSection;
