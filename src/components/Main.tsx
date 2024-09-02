import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Main = () => {
  const carts = useSelector((state) => state.cart.cartItems);

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
            <div className="image">
              <img src={cart.img} alt={cart.title} />
            </div>

            <div className="text-left font-serif">
              <h3>{cart.title}</h3>
              <p>$ {cart.price}</p>

              <button className="mt-1 text-red-500 font-medium">Remove</button>
            </div>
          </div>

          <div className="right">
            <div className="cursor-pointer transition-all duration-150 hover:text-red-500">
              <IoIosArrowUp />
            </div>

            <div className="pointer-events-none text-center select-none font-medium">
              0
            </div>

            <div className="cursor-pointer transition-all duration-150 hover:text-red-500">
              <IoIosArrowDown />
            </div>
          </div>
        </section>
      ))}
    </motion.main>
  );
};

export default Main;
