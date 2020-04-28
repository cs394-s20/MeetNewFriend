import React from 'react';
<<<<<<< HEAD
import { Button, Container, Field, Control, Label, Select } from "rbx";
import Popup from "reactjs-popup";
import Profile from "./Profile.js";
=======
import {Container, Field} from "rbx";
>>>>>>> 508583403e38cf386319ca4eb5ea59b4dac0bce4

const ViewList = ({group, people}) => {
    console.log("this is the group passed in", group);

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

                                {group.map((person) =>
                                    <li key={person}>

                                        <Popup trigger={<Button className="guest-button">
                                            {person}</Button>} position="right bottom"
                                               closeOnDocumentClick>
                                            <Profile person={person} people={people}></Profile>
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
