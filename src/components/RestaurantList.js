import {Button} from "rbx";
import React, {useState} from 'react';
import Restaurant from './Restaurant/Restaurant';
import Preference from "./Preference/Preference";


const RestaurantList = ({ events }) => {
    const [cuisine, setCuisine] = useState('American');
    const matchedRestaurants = events.filter(event => cuisine === event.cuisine);
    if (matchedRestaurants){console.log("there are restaurants available")} else {console.log("no restaurant available")}
    console.log(events);

    return (
        <React.Fragment>
            <Preference state={{cuisine, setCuisine}}/>

            <div className='restaurant-list'>
                Available restaurants:
            <Button.Group>
                { matchedRestaurants.map(event =>
                    <Restaurant key={event.id} event={event}/>) }
            </Button.Group>
            </div>
        </React.Fragment>
    );
};

export default RestaurantList;
