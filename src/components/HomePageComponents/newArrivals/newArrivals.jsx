import React from "react";
import Product from "../../common/product";
import Button from "../../common/button";

const arr = [5, 6, 7, 8];

const NewArrivals = () => {
  return (
    <div className="py-20   px-8">
      <h1 className="uppercase text-2xl font-light text-center mb-20">
        New Arrivals
      </h1>
      <div>
        <div className="grid lg:grid-cols-2 grid-cols-4 gap-5">
          {arr.map((item) => (
            <>
              <Product
                img={`/products/${item}.webp`}
                id
                productName={
                  "LA ROCHE-POSAY SPF 50+ INVISIBLE FLUID ULTIMATE PROTECTION ULTRA LONG-U 50ML"
                }
                price={"11.610 KWD"}
              />
            </>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <Button link="#" text="view all products" />
      </div>
    </div>
  );
};

export default NewArrivals;
