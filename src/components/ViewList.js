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

                            <Popup trigger={<Button className="guest-button">{group["group"].map((person) => <li key={person}>{person}</li>)}</Button>} position="right bottom"
                                   closeOnDocumentClick>
                            </Popup>

                            </ul>
                        </Field>
                    </li>
                </ul>
            </Container>
    );
};


export default ViewList;
