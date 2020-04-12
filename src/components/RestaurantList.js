import {Button} from "rbx";
import React from 'react';
import Restaurant from './Restaurant/Restaurant';


const RestaurantList = ({ events }) => (
    <Button.Group>
        { events.map(event => <Restaurant key ={event.id} event={ event } />) }
    </Button.Group>
);

export default RestaurantList;
