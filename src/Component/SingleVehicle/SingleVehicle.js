import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleVehicle = (props) => {
    const { title, imageUrl, vehicle_id, id } = props.vehicle;
    return (
      <>
        <Link to={`/destinations/${vehicle_id}`} className="text-decoration-none">
          <Card
            className="m-2 d-flex align-content-between shadow border-0"
            style={{ width: "16rem"}}
          >
            <Card.Img className="card-img" variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Text className="text-center font-weight-bold">
                {title} <br/>
                {id}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </>
    );
};

export default SingleVehicle;
