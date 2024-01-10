import CartInfo from "./CartInfo";
function InfoSection() {
  return (
    <section className="flex flex-col md:flex-row container mx-auto space-y-5 md:space-y-0 md:space-x-5 md:justify-between items-center mt-20 ">
      <CartInfo
        path="shipping.png"
        title="FREE SHIPPING"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, similique."
      />
      <CartInfo
        path="refund.png"
        title="FREE SHIPPING"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, similique."
      />
      <CartInfo
        path="support.png"
        title="FREE SHIPPING"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, similique."
      />
    </section>
  );
}

export default InfoSection;
