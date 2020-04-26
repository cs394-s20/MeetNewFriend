import React from 'react';
import { ButtonGroup, Button, Card, Field, Label } from "rbx";
import Popup from "reactjs-popup";
import 'firebase/database';
import 'firebase/auth';

const Profile = (person) => {

  //find person's profile

  console.log('person:', person);

  return (
      <li>
          <Card>
                <Field>
                  <Label> Major: </Label>
                    Theater
                </Field>
          </Card>



              {/*<Card.Image>*/}
              {/*    <img src={event.imageURL} style={{ width: 300, height: 200 }} alt="Logo" />*/}
              {/*</Card.Image>*/}

              {/*<Card.Header>*/}
              {/*    {event["name"]}*/}
              {/*</Card.Header>*/}

              {/*<Card.Content>*/}

              {/*    <Field>*/}
              {/*        /!* <p> *!/*/}
              {/*        <Label> Major </Label>*/}
              {/*        {event["major"]}*/}
              {/*        /!* </p> *!/*/}

              {/*    </Field>*/}

              {/*    <Field>*/}
              {/*      <Label> Year </Label>*/}
              {/*        {event['year']}*/}
              {/*    </Field>*/}

              {/*</Card.Content>*/}


          <br />
      </li>
  );

};

export default Profile;
