import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  async function fetchProducts() {
    setLoader(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setLoader(false);
    setProducts(result);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex justify-center p-6">
      <div className="flex justify-center items-center">
        {loader && (
          <Circles
            height={"120"}
            width={"120"}
            color="#1d7cec"
            visible={true}
          />
        )}
      </div>
      <div className="mt-8">
        {products && products.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          !loader && <p className="text-center">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
