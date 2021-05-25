import React from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const SingleVehicle = (props) => {
    const { title, imageUrl } = props.vehicle;
    const {id} = useParams()
    return (
      <>
        <Link to={`/destinations/${id}`}>
          <Card
            className="m-2 d-flex align-content-between"
            style={{ width: "16rem" }}
          >
            <Card.Img className="card-img" variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Text className="text-center font-weight-bold">
                {title}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </>
    );
};

export default SingleVehicle;
