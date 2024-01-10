import { useState, useEffect } from "react";

import CartBanner from "./CartBanner";
import Loader from "../Helper/Loader";
import Error from "../Helper/Error";

const DISCOUNT = 18;

function Banner() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [status, setStatus] = useState(true);

  useEffect(function () {
    const getData = async function (URL) {
      try {
        setIsLoading(true);
        const res = await fetch(URL);
        const data = await res.json();
        setData(data);
        setStatus(true);
      } catch (err) {
        setStatus(false);
        throw new Error("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    };
    getData(
      "https://api.escuelajs.co/api/v1/products/?categoryId=1&offset=10&limit=3"
    );
  }, []);

  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-between  translate-y-[-80px] bg-zinc rounded-md items-center ">
      {isLoading && (
        <div className="w-[100%] flex justify-center items-center">
          <Loader />
        </div>
      )}
      {status ? (
        data.map((cart, index) => (
          <CartBanner
            title={cart.title}
            price={cart.price}
            path={cart.images[0]}
            lastChild={index === data.length - 1 ? true : false}
            key={cart.id}
            discount={DISCOUNT}
          />
        ))
      ) : (
        <Error />
      )}
    </section>
  );
}

export default Banner;
