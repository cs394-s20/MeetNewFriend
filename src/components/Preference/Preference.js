import {Button,InputNumber, Dropdown} from "rbx";
import TimePicker from 'react-time-picker';
import NumericInput from 'react-numeric-input';
import React, {useState} from "react";

const buttonColor = selected => (
    selected ? 'success' : null
);

const cuisine = {O: 'All', A: 'American', F: 'French', B: 'British', G: 'Greek', D: 'Mediterranean', M: 'Mexican', C: 'Chinese', I: 'Italian', N: 'Indian', K: 'Korean'};

const Preference = ({ state }) => {

    return (
        <div className="filter">
            Preference:

            <Dropdown>
                <Dropdown.Trigger> <Button color="info"> {state.cuisine} &#9660; </Button> </Dropdown.Trigger>
                <Dropdown.Menu>
                    {
                        Object.values(cuisine)
                        .map(value =>
                            <Dropdown.Item key={value}
                                    color={ buttonColor(value === state.cuisine) }
                                    onClick={ () => state.setCuisine(value) } >
                                { value }
                            </Dropdown.Item>
                        )
                    }
                </Dropdown.Menu>
            </Dropdown>

            {/*<Dropdown>*/}
            {/*    <Dropdown.Trigger> <Button color="info"> Time &#9660; </Button> </Dropdown.Trigger>*/}
            {/*    <Dropdown.Menu>*/}
            {/*    <Dropdown.Item>*/}
            {/*        <TimePicker/>*/}
            {/*    </Dropdown.Item>*/}
            {/*    </Dropdown.Menu>*/}
            {/*</Dropdown>*/}

            {/*<Dropdown>*/}
            {/*    <Dropdown.Trigger> <Button color="info"> Size &#9660; </Button> </Dropdown.Trigger>*/}
            {/*    <Dropdown.Menu>*/}
            {/*    <Dropdown.Item>*/}
            {/*        <NumericInput  min={2} max={15} value={3} onClick={ () => state.setMaxSize(10) }/>*/}
            {/*    </Dropdown.Item>*/}
            {/*    </Dropdown.Menu>*/}
            {/*</Dropdown>*/}
        </div>)
};

export default Preference;
