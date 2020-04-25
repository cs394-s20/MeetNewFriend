import React from 'react';
import { Button, Container, Field, Control, Label, Select } from "rbx";
import Popup from "reactjs-popup";
import 'firebase/database';
import 'firebase/auth';
import firebase from '../shared/firebase.js'

const Profile = (person) => {

  //find person's profile
  // const idRef = firebase.database().ref('profiles/' + group);
  console.log('person:', person);


  //store person's info and display
  // return (
  //     <li>
  //         <Card>
  //             <Card.Image>
  //                 <img src={event.imageURL} style={{ width: 300, height: 200 }} alt="Logo" />
  //             </Card.Image>
  //
  //             <Card.Header>
  //                 {event["name"]}
  //             </Card.Header>
  //
  //             <Card.Content>
  //
  //                 <Field>
  //                     {/* <p> */}
  //                     <Label> Major </Label>
  //                     {event["major"]}
  //                     {/* </p> */}
  //
  //                 </Field>
  //
  //                 <Field>
  //                   <Label> Year </Label>
  //                     {event['year']}
  //                 </Field>
  //
  //                 <Field>
  //                   <Label> About Me </Label>
  //                     {event['aboutme']}
  //                 </Field>
  //
  //             </Card.Content>
  //
  //         </Card>
  //         <br />
  //     </li>
  // );

};

export default Profile;
