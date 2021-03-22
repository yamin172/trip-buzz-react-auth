import React, { useEffect, useState } from 'react';
import Vehicles from '../../VehicleData/VehicleData.json';
import SingleVehicle from '../SingleVehicle/SingleVehicle';

const Vehicle = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        setVehicles(Vehicles)
    }, [])
    
    return (
        <div className="container mt-3 d-flex">
            {
                vehicles.map(vehicle => <SingleVehicle key={vehicle.id} vehicle={vehicle}/>)
            }
        </div>
    );
};

export default Vehicle;