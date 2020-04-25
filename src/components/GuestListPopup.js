import {Button} from "rbx";
import ViewList from "./ViewList";
import Popup from "reactjs-popup";
import React from "react";

const GuestListPopup = props => {
    const current = props["groupSize"];
    const group = props["group"];
    return (
        <Popup trigger={<Button className="guest-button"> {current} </Button>} position="right bottom"
               closeOnDocumentClick>
            <ViewList group={group}> </ViewList>
        </Popup>
    );
};

export default GuestListPopup;
