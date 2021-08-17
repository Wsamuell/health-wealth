import React from 'react';
import { ADD_POINTS } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import './style.css';

function Shop(item) {
  const [purchase] = useMutation(ADD_POINTS);

  const badge = [

    {
      "icon": "bb8",
      "price": -20,
      "svgFile": 'bb8.svg'
    },
    {
      "icon": "Bronze",
      "price": -50,
      "svgFile": 'bronzemedalv1.svg'
    },
    {
      "icon": "Silver",
      "price": -100,
      "svgFile": 'silvericon.svg'
    },
    {
      "icon": "Gold",
      "price": -150,
      "svgFile": 'goldicon.svg'
    },
    {
      "icon": "Heart",
      "price": -20,
      "svgFile": 'hearticon.svg'
    },
    {
      "icon": "Nucleus",
      "price": -20,
      "svgFile": 'nucleusicon.svg'
    },
    {
      "icon": "Pizza",
      "price": -20,
      "svgFile": 'pizzaicon.svg'
    },
    {
      "icon": "Pirate Skull",
      "price": -40,
      "svgFile": 'skullpirateicon2.svg'
    }
  ]

  return (
    <div className="shop-page">
      <h2 className="shop-title">
        Shop
      </h2>
      <div className="card px-1 py-1" id="badgeCard">
        <img
          // alt= ${badge.icon}
          src={`img/user_icons/${badge.svgFile}`}
        />
        <div>
          <span>${badge.price}</span>
        </div>
        <button className='btn btn-primary ml-auto' onClick={purchase}>Purchase</button>
      </div>
    </div>
  )
}

export default Shop;