import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import { getUpdateName } from "../user/userSlice";

function Cart() {
  const dispatch = useDispatch();
  const username = useSelector(getUpdateName);

  const cart = useSelector(getCart);

  function handleClearOrder() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 font-semibold text-xl">Your cart, {username}</h2>

      <ul className="divide-y divide-stone-200 mt-3 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2 ">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handleClearOrder}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
