import React from "react";
import { Card } from "react-bootstrap";

const PriceShow = (props) => {
    const { title, price,imageUrl } = props.data;
    return (
    <div>
        <Card className="m-5" style={{ width: "15rem"}}>
        <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <img src={imageUrl} style={{width: "100px"}} alt=""/>
                    <Card.Text>${price}</Card.Text>
                    <button className="btn btn-primary">Booking</button>
        </Card.Body>
        </Card>
    </div>
    );
};

export default PriceShow;
