import {Button} from "rbx";
import React from "react";

const Restaurant = ({ event }) => (
    <Button>
        Name : {event.name}
    </Button>
);

export default Restaurant;
