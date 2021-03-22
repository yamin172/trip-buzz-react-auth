import React from "react";
import { Card } from "react-bootstrap";

const SingleVehicle = (props) => {
    const { title, imageUrl } = props.vehicle;
    return (
        <>
            <a href="/">
            <Card className="m-2 d-flex align-content-between" style={{ width: "18rem" }}>
            <Card.Img className="card-img" variant="top" src={imageUrl} />
            <Card.Body>
                    <Card.Text className="text-center font-weight-bold">{title}</Card.Text>
            </Card.Body>
            </Card>
            </a>
        </>
    );
};

export default SingleVehicle;
