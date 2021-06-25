import { Fragment } from "react";
import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
// import { toggleActions} from '../../store/toggle';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Fragment>
      {/* { isHidden && */}
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </ul>
      </Card>
      {/* } */}
    </Fragment>
  );
};

export default Cart;
