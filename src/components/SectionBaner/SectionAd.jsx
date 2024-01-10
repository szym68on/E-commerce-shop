function SectionAd() {
  return (
    <section className="hidden bg-blue md:flex items-center mt-20">
      <div className="w-[60%] pl-20 text-white">
        <h3 className="text-5xl">Adidas Men Running Sneakers</h3>
        <p className="mt-3">Performance and desig. Taken right to the edge</p>
      </div>

      <img
        src="shoe-ad.png"
        alt="shoe"
        className="w-[50%] translate-y-[-100px]"
      ></img>
    </section>
  );
}

export default SectionAd;
