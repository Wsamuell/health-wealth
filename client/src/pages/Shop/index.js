import React from 'react';
import { Link } from "react-router-dom";
// modeled after ShopShop components/ProductItem
// import all routes 

// purchase function that will remove points from your account 

// where do we define 'name, image, price'? How are those all related to one another?

function Shop(item) {
  // const [state, dispatch]

  const {
    svg,
    iconName,
    price
  } = item;

  return (
    <div className="card px-1 py-1">
      {/* <Link to={`/products/${_id}`}> */}
      <img
        // alt={name}
        // src={`img/user_icons/${svg}`}
        src="../assets/user_icons/bb8.svg"
      />
      <p>Name of SVG Icon</p>
      {/* </Link> */}
      <div>
        <p>price</p>
        {/* <span>${price}</span> */}
      </div>
      <button>Purchase</button>
      {/* event listener */}
    </div>
  )
}

export default Shop;