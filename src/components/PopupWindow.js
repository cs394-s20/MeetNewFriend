import {Button} from "rbx";
import CreateEvent from "./CreateEvent";
import Popup from "reactjs-popup";
import React from "react";

var contentStyle = {
    width: "40%",
    background: "orange",
};


const PopupWindow = () => {
    return (
        <Popup contentStyle={contentStyle} trigger={<Button> Create Event </Button>} position="bottom center" modal closeOnDocumentClick>
            <CreateEvent>Popup content here !!</CreateEvent>
        </Popup>
    );
};

export default PopupWindow;


