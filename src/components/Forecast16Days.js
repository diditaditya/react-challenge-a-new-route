import React from 'react';

const FC16Days = function(props) {
    let weathers = props.weathers;

    if(weathers) {

        return (

            <div>

                <h2>16-Day Daily Weather Forecast</h2>

                <table className="table">
                    <thead>
                        <tr>
                            <td><b>Date</b></td>
                            <td><b>Forecast</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        { weathers.map((weather, index) => {
                            let today = new Date();
                            let dateTime = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate() + index}`;
                            return (
                                <tr key={index}>
                                    <td>{dateTime}</td>
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

export default FC16Days;

                