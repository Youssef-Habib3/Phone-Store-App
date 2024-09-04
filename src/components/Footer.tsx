import { Button } from "@/components/ui/button";
import { AppDispatch, RootState } from "@/store/store";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import RemoveItems from "./RemoveItems";
import { isOpen } from "@/store/features/cartSlice";

const Footer: React.FC = () => {
  const { total, isOpened } = useSelector((state: RootState) => state.cart);

  const disPatch = useDispatch<AppDispatch>();

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
          onClick={() => disPatch(isOpen())}
          className="border-red-500 border-2 text-red-500 hover:text-white hover:bg-red-500 font-bold text-md"
          variant="outline"
        >
          CLEAR CART
        </Button>
      </div>

      {isOpened && <RemoveItems />}
    </motion.footer>
  );
};

export default Footer;
