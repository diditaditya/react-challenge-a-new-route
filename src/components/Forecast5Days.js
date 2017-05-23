import React from 'react';

const FC5Days = function(props) {
    let weathers = props.weathers;

    if(weathers) {

        return (

            <div>
                <h2>5-Day 3-Hourly Weather Forecast</h2>

                <table className="table">
                    <thead>
                        <tr>
                            <td><b>Date</b></td>
                            <td><b>Time</b></td>
                            <td><b>Forecast</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        { weathers.map((weather, index) => {
                            let dateTime = weather.dt_txt.split(' ');
                            return (
                                <tr key={index}>
                                    <td>{dateTime[0]}</td>
                                    <td>{dateTime[1]}</td>
                                    <td>{weather.weather[0].description}</td>
                                </tr>
                                );
                            })
                        }
                    </tbody>
                </table>

            </div>

        
         );

    } else {
        return (
            <h3>Loading forecast data..</h3>
        );
    }

    
}

export default FC5Days;

                