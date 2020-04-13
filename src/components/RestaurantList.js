import { Button } from "rbx";
import React, { useState } from 'react';
import Restaurant from './Restaurant/Restaurant';
import Preference from "./Preference/Preference";



const RestaurantList = ({ events }) => {
    const [cuisine, setCuisine] = useState('American');
    const matchedRestaurants = events.filter(event => cuisine === event.cuisine);
    if (matchedRestaurants) { console.log("there are restaurants available") } else { console.log("no restaurant available") }
    console.log(events);

    return (
        <React.Fragment>
            <Preference state={{ cuisine, setCuisine }} />


            
                <div className='restaurant-list'>
                    Available restaurants:
                {/* <div class="row"> */}
                    <center>
                        <div class="col-md-6 restaurant-info" alt="Max-width 100%">
                            <ul class='restaurant'>
                                {matchedRestaurants.map(event =>
                                    <Restaurant key={event.id} event={event} />)}
                            </ul>
                        </div>
                    </center>

                    {/* </div> */}
                </div>
        </React.Fragment>
    );
};

export default RestaurantList;
