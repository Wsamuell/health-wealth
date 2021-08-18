import React from "react";
import { ADD_POINTS } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { Card, Container, Row } from "react-bootstrap";
import "./style.css";

function Shop(item) {
  const [purchase] = useMutation(ADD_POINTS);

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
      <Container flex className="container">
        <Row flex>
          {badge.map((badge, icon) => (
            <Card style={{ width: "10rem" }} className="badgeCard">
              <Card.Img className="badgeImg" variant="top" src={require(`../../assets/user_icons/${badge.svgFile}`).default} alt={badge.icon} />
              <div>
                <Card.Text className="price">{badge.price} points</Card.Text>
              </div>
              <button className="purchase-btn" onClick={purchase}>
                Purchase
              </button>
            </Card>
          )
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Shop;
