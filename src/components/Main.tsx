import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  allPosts,
  calcTotal,
  decrease,
  increase,
  removeCart,
} from "@/store/features/cartSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/store/store";

const Main: React.FC = () => {
  const carts = useSelector((state: RootState) => state.cart.cartItems);

  const disPatch = useDispatch<AppDispatch>();

  const handelRemoveCart = (id: string) => {
    disPatch(removeCart(id));
  };

  const handelIncreaseCart = (id: string) => {
    disPatch(increase(id));
  };

  const handelDecreaseCart = (id: string) => {
    disPatch(decrease(id));
  };

  // every time ( carts ) will change ( total ) will update
  useEffect(() => {
    disPatch(calcTotal());
  }, [carts, disPatch]);

  useEffect(() => {
    disPatch(allPosts());
  }, [disPatch]);

  const { isLoading } = useSelector((state: RootState) => state.cart);
  if (isLoading) {
    return (
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="text-4xl py-10 font-bold"
      >
        Loading...
      </motion.h1>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 2 }}
      className="mt-6 w-full"
    >
      {carts.map((cart) => (
        <section
          key={cart.id}
          className="flex justify-between items-center mb-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-20">
              <img
                className="w-full h-full object-cover"
                src={cart.img}
                alt={cart.title}
              />
            </div>

            <div className="text-left font-serif">
              <h3>{cart.title}</h3>
              <p>$ {cart.price}</p>

              {carts.length > 1 ? (
                <button
                  onClick={() => handelRemoveCart(cart.id)}
                  className="mt-1 text-red-500 font-medium"
                >
                  Remove
                </button>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="select-none">
            <div
              onClick={() => handelIncreaseCart(cart.id)}
              className="cursor-pointer transition-all duration-150 hover:text-red-500"
            >
              <IoIosArrowUp />
            </div>

            <div className="pointer-events-none text-center font-medium">
              {cart.amount}
            </div>

            <div
              onClick={() => handelDecreaseCart(cart.id)}
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
