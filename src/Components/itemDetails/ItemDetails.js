 import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
// import { GlobalContext } from "../../context/GlobalState"; 
import "./ItemDetails.css";
import items from "../../mockData/items.json";
import { GlobalContext } from "../../context/GlobalState";

function ItemDetail() {
  const { id } = useParams(); // Get the item ID from route params
  const itemId = parseInt(id); // Parse ID to integer
  const { addItemToCartList, cart } = useContext(GlobalContext); // Access context for adding to cart

  // Find the item from mock data based on itemId
  const item = items.find((item) => item.id === itemId);

  // Handle case where item is not found
  if (!item) {
    return <div>Item not found</div>;
  }

  // Check if item is already in cart
  const isAdded = cart.some((c) => c.id === itemId);

  // Function to add item to cart
  const addToCart = () => {
    addItemToCartList(item); // Dispatch action to add item to cart
  };

  return (
    <div className="item-detail-container">
      <Link to="/"> &#8592; Back</Link>
      <div className="item-detail">
        <div className="item-detail-image">
          <img src={item.image} alt={"Item image"} />
        </div>
        <div className="item-detail-info">
          <div className="item-brand">{item.brand}</div>
          <div className="item-name">{item.name}</div>
          <div className="item-price">${item.price}</div>

          <select className="item-size">
            <option value={"S"}> Select size (S)</option>
            <option value={"M"}> Select size (M)</option>
            <option value={"L"}> Select size (L)</option>
            <option value={"XL"}> Select size (XL)</option>
          </select>
          <button className="item-btn" disabled={isAdded} onClick={addToCart}>
            {isAdded ? <Link to="/cart">Item Added</Link> : "Add To Bag"}
          </button>
          <p className="item-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
