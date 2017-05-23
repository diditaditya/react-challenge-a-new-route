import React from 'react';

const City = function(props) {
    let city = props.city;
    if(city) {
        return (
            <div className="container">
                <h1> {city.name} </h1>
                <p> lat: {city.coord.lat}, lon: {city.coord.lon} </p>
                <hr/>
            </div>
        );
    } else {
        return (
            <div className="container">
                <h3>Loading city data..</h3>                
            </div>
        );
    }
}

export default City;