import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import RemoveItems from "./RemoveItems";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/store/features/cancelSlice";
import { AppDispatch, RootState } from "@/store/store";

const Footer: React.FC = () => {
  const { total } = useSelector((state: RootState) => state.cart);

  const removeItem = useSelector((state: RootState) => state.cancel);

  const disPatch = useDispatch<AppDispatch>();

  const handleClear = () => {
    disPatch(openModal());
  };

  return (
    <motion.footer
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 1, type: "spring", mass: 1.5 }}
      className="border-t-[3px] w-full"
    >
      <div className="flex justify-between items-center font-medium text-lg pointer-events-none select-none pt-1">
        <h2>Total</h2>
        <h2>$ {total.toFixed(2)}</h2>
      </div>

      <div className="flex justify-center items-center mt-4">
        <Button
          onClick={handleClear}
          className="border-red-500 border-2 text-red-500 hover:text-white hover:bg-red-500 font-bold text-md"
          variant="outline"
        >
          CLEAR CART
        </Button>
      </div>

      {removeItem.isOpen && <RemoveItems />}
    </motion.footer>
  );
};

export default Footer;
