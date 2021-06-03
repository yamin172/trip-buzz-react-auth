import React, { useEffect, useState } from 'react';
import Vehicles from "../../VehicleData/VehicleData.json";
import { Container } from 'react-bootstrap';
import PriceShow from '../PriceShow/PriceShow';

const Destination = () => {
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