import React, { useEffect, useState } from 'react';
import Vehicles from "../../VehicleData/VehicleData.json";
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import PriceShow from '../PriceShow/PriceShow';

const Destination = (props) => {
  const {vehicle_id} = useParams();
  const [dataShow, setDataShow] = useState([]);
  useEffect(() => {
    setDataShow(Vehicles)
  }, []);
    return (
      <Container className="mt-5">
        {
          dataShow.map(data => <PriceShow data={data}></PriceShow>)
        }
      </Container>
    );
};

export default Destination;