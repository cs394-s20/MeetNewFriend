import {Button} from "rbx";
import React from "react";

const Restaurant = ({ event }) => (
    <Button>
        {event.name}
    </Button>
);

export default Restaurant;
