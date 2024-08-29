import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreseItemQuantity, increseItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 items-center md:gap-2">
      <Button
        type="round"
        onClick={() => dispatch(decreseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
