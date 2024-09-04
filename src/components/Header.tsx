import { MdLocalGroceryStore } from "react-icons/md";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Header: React.FC = () => {
  const { amount } = useSelector((state: RootState) => state.cart);

  return (
    <motion.header
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 1, type: "spring", mass: 1.5 }}
      className="bg-purple-700 w-full py-5 text-white"
    >
      <h1 className="font-bold text-4xl font-mono flex justify-center items-center gap-3 pointer-events-none select-none">
        My Bag{" "}
        <div className="relative">
          <MdLocalGroceryStore />
          <span className="absolute -top-3 -right-3 text-sm bg-gray-200 rounded-full w-7 h-7 flex justify-center items-center text-black">
            {amount}
          </span>
        </div>
      </h1>
    </motion.header>
  );
};

export default Header;
