import React from 'react';
import {Container, Field} from "rbx";

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
