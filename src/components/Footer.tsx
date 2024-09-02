import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const { total } = useSelector((state) => state.cart);

  const [showRemoveItem, setShowRemoveItem] = useState(false);
  const [cancel, setCancel] = useState(true);

  const handleShowRemoveItem = () => {
    setShowRemoveItem(true);
    setCancel(true);
  };

  const handleCancel = () => {
    setCancel(false);
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
        <h2>$ {total}</h2>
      </div>

      <div className="flex justify-center items-center mt-4">
        <Button
          onClick={handleShowRemoveItem}
          className="border-red-500 border-2 text-red-500 hover:text-white hover:bg-red-500 font-bold text-md"
          variant="outline"
        >
          CLEAR CART
        </Button>

        {showRemoveItem && (
          <>
            {cancel && (
              <div className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-black/90">
                <div className="bg-white/80 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-7 text-center w-fit rounded-xl select-none">
                  <p className="font-medium font-mono text-lg">
                    Remove all items from your shopping cart?
                  </p>

                  <div className="flex justify-center items-center gap-8 mt-3">
                    <Button
                      className="border-blue-500 border-2 text-blue-500 hover:text-white hover:bg-blue-500 font-bold text-md w-28"
                      variant="outline"
                    >
                      CONFIRM
                    </Button>
                    <Button
                      onClick={handleCancel}
                      className="border-red-500 border-2 text-red-500 hover:text-white hover:bg-red-500 font-bold text-md w-28"
                      variant="outline"
                    >
                      CANCEL
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </motion.footer>
  );
};

export default Footer;
