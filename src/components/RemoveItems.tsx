import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { AppDispatch } from "@/store/store";
import { clearCart, isClose } from "@/store/features/cartSlice";

const RemoveItems: React.FC = () => {
  const disPatch = useDispatch<AppDispatch>();

  return (
    <div className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-black/90">
      <div className="bg-white/80 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-7 text-center w-fit rounded-xl select-none">
        <p className="font-medium font-mono text-lg">
          Remove all items from your shopping cart?
        </p>

        <div className="flex justify-center items-center gap-8 mt-3">
          <Button
            onClick={() => {
              disPatch(clearCart());
              disPatch(isClose());
            }}
            className="border-blue-500 border-2 text-blue-500 hover:text-white hover:bg-blue-500 font-bold text-md w-28"
            variant="outline"
          >
            CONFIRM
          </Button>
          <Button
            onClick={() => disPatch(isClose())}
            className="border-red-500 border-2 text-red-500 hover:text-white hover:bg-red-500 font-bold text-md w-28"
            variant="outline"
          >
            CANCEL
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RemoveItems;
