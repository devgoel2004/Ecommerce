import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
const CartItemCard = ({ item, deleteItemFromCart }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price :$${item.price}`}</span>
        <p onClick={() => deleteItemFromCart(item.product)}>
          <RemoveShoppingCartIcon />
          Remove
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;
