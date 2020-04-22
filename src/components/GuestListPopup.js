import {Button} from "rbx";
import ViewList from "./ViewList";
import Popup from "reactjs-popup";
import React from "react";


var contentStyle = {
    width: "40%",
    background: "orange",
    text: "center",
};


const GuestListPopup = (props) => {
    const current = props["groupSize"]
    const group = props["group"]
    return (
        <Popup contentStyle={contentStyle} trigger={<Button class="viewList"> {current} </Button>} position="bottom center" modal closeOnDocumentClick>
            <ViewList group={group}></ViewList>
        </Popup>
    );
};

export default GuestListPopup;


