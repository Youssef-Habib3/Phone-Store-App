import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import {
  allPosts,
  calcTotal,
  decrease,
  increase,
  removeCart,
} from "@/store/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/store/store";

const Main: React.FC = () => {
  const disPatch = useDispatch<AppDispatch>();

  const { cartItems, isLoading } = useSelector(
    (state: RootState) => state.cart
  );

  const carts = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    disPatch(calcTotal());
  }, [carts, disPatch]);

  useEffect(() => {
    disPatch(allPosts());
  }, [disPatch]);

  if (isLoading) {
    return (
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="text-4xl py-10 font-bold"
      >
        Loading...
      </motion.h1>
    );
  }

  if (cartItems.length === 0) {
    return (
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="text-4xl py-10 font-bold"
      >
        NO ITEMS
      </motion.h1>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
      className="mt-6 w-full"
    >
      {cartItems.map((cart) => (
        <section
          key={cart.id}
          className="flex justify-between items-center mb-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-20">
              <img
                className="w-full h-full object-cover"
                src={cart.img || "/vite.svg"}
                alt={cart.title || "image title"}
              />
            </div>

            <div className="text-left font-serif">
              <h3>{cart.title || "Title"}</h3>
              <p>$ {cart.price || 0}</p>

              <button
                onClick={() => disPatch(removeCart(cart.id))}
                className="mt-1 text-red-500 font-medium"
              >
                Remove
              </button>
            </div>
          </div>

          <div className="select-none">
            <div
              onClick={() => disPatch(increase(cart.id))}
              className="cursor-pointer transition-all duration-150 hover:text-red-500"
            >
              <IoIosArrowUp />
            </div>

            <div className="pointer-events-none text-center font-medium">
              {cart.amount || 0}
            </div>

            <div
              onClick={() => disPatch(decrease(cart.id))}
              className="cursor-pointer transition-all duration-150 hover:text-red-500"
            >
              <IoIosArrowDown />
            </div>
          </div>
        </section>
      ))}
    </motion.main>
  );
};

export default Main;
