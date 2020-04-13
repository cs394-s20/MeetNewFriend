import { Button, Card, Field, Label } from "rbx";
import React, { useState, useEffect } from 'react';
import firebase from '../../../src/shared/firebase.js'
import "firebase/storage";
// import img from "public/img/buffalo.jpg";

const storage = firebase.storage().ref();
const ref = storage.child("img").child("buffalo.jpg");


const Restaurant = ({ event }) => {
    const [image, setImage] = useState("");
    const [joined, setJoined] = useState(false);


    useEffect(() => {
        // var ref.getDownloadURL().then((downloadURL) => {
        //     console.log("HELLO");
        //     console.log(downloadURL);
        // });
        ref.getDownloadURL()
            .then(downloadURL => {
                setImage(downloadURL);
            })
            .catch(() => {
                console.log("error");
            });
    }, [image, setImage]);

    console.log("inside function");
    console.log(image);

    return (
        <li>
            <Card>
                <Card.Image size="medium">
                    <img src={event.imageURL} style={{ width: 300, height: 200 }} alt="Logo" />
                </Card.Image>

                <Card.Header>
                    {event["name"]}
                </Card.Header>

                <Card.Content>

                    <Field>
                        {/* <p> */}
                            <Label> Date: </Label>
                            {event["date"]}
                        {/* </p> */}

                    </Field>
                    <Field>
                        <Label>Group Size: </Label>
                        {event["group-size"]}
                    </Field>
                    <Field>
                        <Label> Time: </Label>
                        {event["time"]}
                    </Field>

                    <Button color="warning" size="small" onClick={()=>setJoined(!joined)}>
                    {(() => {
                    switch (joined) {
                        case true:   return "Leave Event";
                        case false:  return "Join";
                        default:     return "Join";
                    }
                    })()}
                </Button>

                </Card.Content>


            </Card>
        </li>
    );

};

export default Restaurant;

