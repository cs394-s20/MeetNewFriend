import React from 'react';
import {Button, Container, Field, Control} from "rbx";
import { useState} from 'react';

var divStyle = {
    width: '60%',
    horizontal: "left"
};

const CreateEvent = () => {
    return (
        <Container>
            <Field horizontal={true}>
                <Field.Label> Restaurant Name </Field.Label>
                <Control> <input type="text" name="name" /> </Control>
            </Field>


            <Field horizontal={true}>
                <Field.Label> Cuisine </Field.Label>
                <Control> <input type="text" name="name" /> </Control>
            </Field>


            <Field horizontal={true}>
                <Field.Label> Time </Field.Label>
                <Control> <input type="text" name="name" /> </Control>
            </Field>


            <Field horizontal={true}>
                <Field.Label> Party Size </Field.Label>
                <Control> <input type="text" name="name" /> </Control>
            </Field>


            <Field horizontal={true}>
                <Field.Label> Description </Field.Label>
                <Control> <input type="text" name="name" /> </Control>
            </Field>


        </Container>
    );
};


export default CreateEvent;
