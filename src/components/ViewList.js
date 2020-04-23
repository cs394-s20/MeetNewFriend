import React from 'react';
import { Button, Container, Field, Control, Label, Select } from "rbx";
import Popup from "reactjs-popup";

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
                                {group["group"].map((person) => <li key={person}>{person}</li>)}
                            </ul>
                        </Field>
                    </li>
                </ul>
            </Container>
    );
};


export default ViewList;
