import React, {useEffect, useState} from 'react';
import { ButtonGroup, Button, Card, Field, Label } from "rbx";
import Popup from "reactjs-popup";
import 'firebase/database';
import 'firebase/auth';
import firebase from "../shared/firebase";

const Profile = ({person, people}) => {

    //click name search it in people
    return(

        people["profiles"].filter(name => name["name"] === person).map(filteredPerson => (

            <li>
                <Card>
                    <Field>
                        <Label> Major: </Label>
                        {filteredPerson["major"]}
                    </Field>
                </Card>

                <Card>
                    <Field>
                        <Label> Year: </Label>
                        {filteredPerson["year"]}
                    </Field>
                </Card>

                <Card>
                    <Field>
                        <Label> About Me: </Label>
                        {filteredPerson["aboutme"]}
                    </Field>
                </Card>

                <Card>
                    <Card.Image>
                        <img src={filteredPerson.imageURL} style={{ width: 300, height: 200 }} alt="Logo" />
                    </Card.Image>
                </Card>

                <br/>
            </li>
            )
        ));
};

export default Profile;