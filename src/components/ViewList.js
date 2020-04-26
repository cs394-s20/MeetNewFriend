import React from 'react';
import { Button, Container, Field, Control, Label, Select } from "rbx";
import Popup from "reactjs-popup";
import Profile from "./Profile.js";
import ReactHover from 'react-hover';

const optionsCursorTrueWithMargin = {
      followCursor:true
}


const ViewList = (group) => {

    return (
            <Container>
                <ul className='popup_guest'>
                    <li>
                        <Field horizontal={true}>
                            <p>Guest List</p>
                        </Field>
                    </li>

                    <li>
                        <Field horizontal={true}>
                            <ul>

                            {group["group"].map((person) =>
                                <li key={person}>

                                <Popup trigger={<Button className="guest-button">
                                    {person}</Button>} position="right bottom"
                                       closeOnDocumentClick>
                                    <Profile name={person}></Profile>
                                </Popup>

                                </li>)}

                            </ul>
                        </Field>
                    </li>
                </ul>
            </Container>
    );
};


export default ViewList;
