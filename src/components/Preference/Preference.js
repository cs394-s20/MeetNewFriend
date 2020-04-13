import {Button, Dropdown} from "rbx";
import React from "react";

const buttonColor = selected => (
    selected ? 'success' : null
);

const cuisine = { A: 'American', F: 'French', B: 'British', G: 'Greek', D: 'Mediterranean', M: 'Mexican', C: 'Chinese', I: 'Italian', N: 'Indian', K: 'Korean'};

const Preference = ({ state }) => (
    <div className="filter">
        step one - choose a cuisine:

        <Dropdown>
            <Dropdown.Trigger> <Button color="info"> Cuisine </Button> </Dropdown.Trigger>
            <Dropdown.Menu>
                { Object.values(cuisine)
                    .map(value =>
                        <Dropdown.Item key={value}
                                color={ buttonColor(value === state.cuisine) }
                                onClick={ () => state.setCuisine(value) } >
                            { value }
                        </Dropdown.Item>
                    )
                }
                    {/*<Dropdown.Item> 1 </Dropdown.Item>*/}
                    {/*<Dropdown.Item> 2 </Dropdown.Item>*/}
            </Dropdown.Menu>
        </Dropdown>

        {/*<Button.Group hasAddons>*/}
        {/*    { Object.values(cuisine)*/}
        {/*        .map(value =>*/}
        {/*            <Button key={value}*/}
        {/*                    color={ buttonColor(value === state.cuisine) }*/}
        {/*                    onClick={ () => state.setCuisine(value) } >*/}
        {/*                { value }*/}
        {/*            </Button>*/}
        {/*        )*/}
        {/*    }*/}
        {/*</Button.Group>*/}
    </div>
);

export default Preference;
