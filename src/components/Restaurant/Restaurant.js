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
    const meals = ['Breakfast','Lunch','Dinner'];

    const matchMeal = duration => {

        let meal = null;

        let times =  duration.split("-");
        let startTime = times[0];
        let endTime = times[1];

        let startTimeHour = parseInt(startTime.split(":")[0]);
        let endTimeHour = parseInt(endTime.split(":")[0]);
        let startTimeMinute = parseInt(startTime.split(":")[1]);
        let endTimeMinute = parseInt(endTime.split(":")[1]);

        if (startTimeHour<12){
            meal = meals[0];
        }

        else if (startTimeHour<=18){
            meal = meals[1];
        }
        else{
            meal = meals[2];
        }


        let durationHour = (endTimeHour-startTimeHour).toString();
        let durationMinute = (endTimeMinute-startTimeMinute).toString();
        let durationFormat = (durationHour==="0") ? (durationMinute+"min") :
          ((durationMinute==="0" ? (durationHour+"hr") : durationHour+"hr "+durationMinute+"min" ))

        //const time = duration.parse('-');
        return [meal,startTime,durationFormat];
    }


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

    const handleJoin = () => {
        setJoined(!joined);
    }

    const timeInfo = matchMeal(event["time"]);

    return (
        <li>
            <Card>
                <Card.Image>
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
                        {timeInfo[0]}
                        <Label> starts: </Label>
                        {timeInfo[1]}
                        <Label> for </Label>
                        {timeInfo[2]}
                    </Field>

                    <Field>
                        {event['description']}
                    </Field>





                {/*    <Button color={(() => {*/}
                {/*    switch (joined) {*/}
                {/*        case true:   return "success";*/}
                {/*        case false:  return "warning";*/}
                {/*        default:     return "warning";*/}
                {/*    }*/}
                {/*    })()} size="small" onClick={()=>handleJoin()}>*/}
                {/*    {(() => {*/}
                {/*    switch (joined) {*/}
                {/*        case true:   return "Leave Event";*/}
                {/*        case false:  return "Join";*/}
                {/*        default:     return "Join";*/}
                {/*    }*/}
                {/*    })()}*/}
                {/*</Button>*/}

                </Card.Content>

            </Card>
            <br/>
        </li>
    );

};

export default Restaurant;

