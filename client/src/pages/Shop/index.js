import React from "react";
import Icon from "../../component/Icon";
import "./style.css";

function Shop(item) {
 


  const badge = [
    {
      icon: "bb8",
      price: -20,
      svgFile: "bb8.svg",
    },
    {
      icon: "Bronze",
      price: -50,
      svgFile: "bronzemedalv1.svg",
    },
    {
      icon: "Silver",
      price: -100,
      svgFile: "silvericon.svg",
    },
    {
      icon: "Gold",
      price: -150,
      svgFile: "goldicon.svg",
    },
    {
      icon: "Heart",
      price: -20,
      svgFile: "hearticon.svg",
    },
    {
      icon: "Nucleus",
      price: -20,
      svgFile: "nucleusicon.svg",
    },
    {
      icon: "Pizza",
      price: -20,
      svgFile: "pizzaicon.svg",
    },
    {
      icon: "Pirate Skull",
      price: -40,
      svgFile: "skullpirateicon2.svg",
    },
  ];

  return (
    <div className="shop-page">
      <h2 className="shop-title"> Shop </h2>
        <div className='shop-items'>
          {badge.map((badge) => (
            <Icon badge={badge}></Icon>
          )
          )}
        </div>
    </div>
  );
}

export default Shop;
