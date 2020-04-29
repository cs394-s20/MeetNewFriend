import { Button } from "rbx";
import React, { useState } from 'react';
import Restaurant from './Restaurant/Restaurant';
import Preference from "./Preference/Preference";
import TagFilter from "./TagFilter/TagFilter"



const UserEventList = ({ name, events, people }) => {
    const hostedRestaurants = (events) => {
        // for each event check if host === name and if people list contains name
        const arr = [];
        Object.values(events).forEach(value => value.host === name ? arr.push(value) : console.log(''));
        return arr;
    };

    const joinedRestaurants = (events) => {
        // for each event check if host === name and if people list contains name
        const arr = [];
        Object.values(events).forEach(value => value.people.includes(name) ? arr.push(value) : console.log(''));
        return arr;
    };

    var hR = hostedRestaurants(events);
    var jR = joinedRestaurants(events);

    return (
        <React.Fragment>
            <div className="col-md-6 restaurant-info" alt="Max-width 100%">
                <h3>Events you're hosting ({hR.length})</h3>
                <ul>
                    {
                    Object.values(hR).map((e) => {
                        return (
                            <Restaurant name={(name===null) ? null : name} key={e.id} people={people} event={e} />
                        )
                    })
                    }
                </ul>
                <hr></hr>
            </div>

            <div className="col-md-6 restaurant-info" alt="Max-width 100%">
                <h3>Events you've joined ({jR.length})</h3>
                <ul>
                    {
                    Object.values(jR).map((e) => {
                        return (
                            <Restaurant name={(name===null) ? null : name} key={e.id} people={people} event={e} />
                        )
                    })
                    }
                </ul>
            </div>
                
        </React.Fragment>
    );
};

export default UserEventList;
