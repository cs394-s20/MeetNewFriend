import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button, Card, Field, Label } from "rbx";
import Popup from "reactjs-popup";
import 'firebase/database';
import 'firebase/auth';
import firebase from "../shared/firebase";

const Profile = ({ person, people }) => {

    // stylize CSS of cards
    //click name search it in people
    return (

        people["profiles"].filter(name => name["name"] === person).map(filteredPerson => (

            <li>
                <li className='personal_info'>
                    {/* <Card>
                        <Field> */}
                            <Label> Major: 
                            {filteredPerson["major"]}</Label>
                            <br/>
                        {/* </Field>
                    </Card> */}

                    {/* <Card>
                        <Field> */}
                            <Label> Year: 
                            {filteredPerson["year"]}</Label><br/>
                        {/* </Field>
                    </Card> */}

                    {/* <Card>
                        <Field> */}
                            <Label> About Me: 
                            {filteredPerson["aboutme"]}</Label><br/>
                        {/* </Field>
                    </Card> */}
                </li>

                <Card>
                    <Card.Image>
                        <img className='profile_pic'src={filteredPerson.imageURL} style={{ width: 300, height: 200 }} alt="Logo" />
                    </Card.Image>
                </Card>

                <br />

            </li>
        )
        ));
};

export default Profile;