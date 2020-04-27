import { Button } from "rbx";
import React, { useState } from 'react';
import Restaurant from './Restaurant/Restaurant';
import Preference from "./Preference/Preference";
import TagFilter from "./TagFilter/TagFilter"



const RestaurantList = ({ name, events }) => {
    const [cuisine, setCuisine] = useState('Pick Cuisine');
    const [maxsize,setMaxSize] = useState('10');
    const [tag, setTag] = useState('Pick Tag');

    const ANDMatch = event => cuisine === event.cuisine;
    const tagMatch = event => tag === event.tag;

    const matchedRestaurants = (events) => {
        if ((cuisine === 'Pick Cuisine' || cuisine === "All") && (tag === "Pick Tag" || tag === "All")) {
            return events;
        }
        else {
            // convert json to array
            const arr = [];
            Object.values(events).forEach(value => arr.push(value));
            if (cuisine === 'Pick Cuisine' || cuisine === "All"){
                return arr.filter(tagMatch);
            }
            else if (tag === "Pick Tag" || tag === "All"){
                return arr.filter(ANDMatch);
            }
            else{
                return arr.filter(ANDMatch).filter(tagMatch);
            }
        }
    };

    const availableWords = (restaurantList) => {
        if (restaurantList.length > 0) {
            return "Available restaurants:";
        }
        else {
            return "No restaurants are available";
        }
    };

    console.log(matchedRestaurants(events));


    return (
        <React.Fragment>
            <Preference state={{ cuisine, setCuisine,maxsize,setMaxSize }} />
            <TagFilter state={{ tag, setTag }} />

                <div className='restaurant-list'>
                    {availableWords(matchedRestaurants(events))}
                {/* <div class="row"> */}
                    <center>
                        <div className="col-md-6 restaurant-info" alt="Max-width 100%">
                            <ul>
                                {
                                    Object.values(matchedRestaurants(events)).map((e) => {
                                        return (
                                            <Restaurant name={(name===null) ? null : name} key={e.id} event={e} />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </center>

                    {/* </div> */}
                </div>
        </React.Fragment>
    );
};

export default RestaurantList;
