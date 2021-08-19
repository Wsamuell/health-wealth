import React from "react";
import { Card } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_POINTS, CHANGE_ICON } from "../../utils/mutations";
import { GET_ME } from "../../utils/queries";

function Icon({badge}) {

    const [purchase, { error }] = useMutation(ADD_POINTS);
    const [changeIcon, { err }] = useMutation(CHANGE_ICON);
    const { data, loading } = useQuery(GET_ME)
    
    const user = data?.me || [];

    const newIcon = async (event) => {
        event.preventDefault();

        try {
            await changeIcon({
                variables: { iconName: badge.svgFile }
            })
            await purchase({
                variables: {userId: user._id, pointValue: badge.price}
            })
        } catch (err) {
            console.log(error)
        }
    }

    return (
        <div>
        <Card style={{ width: "10rem" }} className="badgeCard">
            <Card.Img className="badgeImg" variant="top" src={require(`../../assets/user_icons/${badge.svgFile}`).default} alt={badge.icon} />
            <div>
                <Card.Text className="price">{badge.price} points</Card.Text>
            </div>
            <button className="purchase-btn" onClick={newIcon}>
                Purchase
            </button>
        </Card>
        </div>
    )
}

export default Icon;