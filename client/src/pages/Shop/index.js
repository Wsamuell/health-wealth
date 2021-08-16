import React from 'react';
import { Link } from "react-router-dom";
// modeled after ShopShop components/ProductItem

// purchase function that will remove points from your account 

// where do we define 'name, image, price'? How are those all related to one another?

function Shop() {

    return (
    <div className="card px-1 py-1">
      {/* <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`img/user_icons/${svg}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <span>${price}</span>
      </div>
      <button onClick={purchase}>Purchase</button> */}
    </div>
    )
}

export default Shop;