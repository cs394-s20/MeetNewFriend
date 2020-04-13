import {Button, Card, Field, Label} from "rbx";
import React, {useState, useEffect} from 'react';
import firebase from '../../../src/shared/firebase.js'
import "firebase/storage";
// import img from "public/img/buffalo.jpg";

const storage = firebase.storage().ref();
const ref = storage.child("img").child("buffalo.jpg");

console.log("hallo");
// console.log(img);

const Restaurant = ({ event }) => {
    const [image, setImage] = useState("");


    // setImage(() => {
    //
    // });

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
        <Card>
            <Card.Image>
                {/*<img src={require("./buffalo.jpg")} alt="Logo"/>;*/}
                <img src={event.imageURL} alt="Logo"/>
            </Card.Image>

            <Card.Header>
                {event["name"]}
            </Card.Header>

            <Card.Content>

                <Field>
                    <Label> Date </Label>
                    {event["date"]}
                </Field>
                <Field>
                    <Label> Group Size </Label>
                    {event["group-size"]}
                </Field>
                <Field>
                    <Label> Time </Label>
                    {event["time"]}
                </Field>

                <Button color="warning" size="small">
                    join
                </Button>

            </Card.Content>


        </Card>
    );

};

export default Restaurant;

