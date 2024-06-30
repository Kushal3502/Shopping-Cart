import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../features/cart/cartSlice";

function Cart() {
  const [cartValue, setCartValue] = useState(0);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setCartValue(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, cartValue);

  function handleRemoveFromCart(item) {
    dispatch(removeFromCart(item.id));
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart && cart.length ? (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 flex items-center"
            >
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="ml-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-700">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handleRemoveFromCart(item)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))}
          <div className="text-right text-lg font-bold mt-4">
            Total: ${cartValue.toFixed(2)}
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <h2 className="text-xl font-semibold mb-4">Your cart is empty...</h2>
          <Link to="/">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
