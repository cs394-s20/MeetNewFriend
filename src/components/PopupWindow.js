import {Button} from "rbx";
import CreateEvent from "./CreateEvent";
import Popup from "reactjs-popup";
import React from "react";


const PopupWindow = (host) => {
    return (
        <Popup trigger={<Button> Create Event </Button>} position="bottom center" modal closeOnDocumentClick>
            <CreateEvent name={host}> </CreateEvent>
        </Popup>
    );
};

export default PopupWindow;


