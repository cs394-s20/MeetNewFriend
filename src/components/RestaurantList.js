import {Button} from "rbx";
import React, {useState} from 'react';
import Restaurant from './Restaurant/Restaurant';
import Preference from "./Preference/Preference";


const RestaurantList = ({ events }) => {
    const [cuisine, setCuisine] = useState('American');
    const matchedRestaurants = events.filter(event => cuisine === event.Cuisine);
    console.log(events);

    return (
        <React.Fragment>
            <Preference state={{cuisine, setCuisine}}/>
            <Button.Group>
                { matchedRestaurants.map(event =>
                    <Restaurant key={event.id} event={event}/>) }
            </Button.Group>
        </React.Fragment>
    );
};

export default RestaurantList;
