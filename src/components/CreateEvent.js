import React from 'react';
import {Button, Container, Field, Control, Label, Select} from "rbx";
import { useState} from 'react';
import Restaurant from "./Restaurant";
import cuisine from '../shared/data';


const CreateEvent = () => {

    return (
        <Container>
            <Field horizontal={true}>
                <Field.Label> <Label> Restaurant Name </Label> </Field.Label>
                <Control> <input type="text" name="name" /> </Control>
            </Field>


            <Field horizontal={true}>
                <Field.Label> <Label> Cuisine </Label> </Field.Label>

                <Control expanded={true}>
                    <Select.Container fullwidth={true}>
                        <Select>
                            {Object.values(cuisine).map(value =>
                                <Select.Option> {value} </Select.Option>)
                            }
                        </Select>
                    </Select.Container>
                </Control>

            </Field>


            <Field horizontal={true}>
                <Field.Label> <Label> Time </Label></Field.Label>
                <Control expanded={true}>

                        <Select.Container fullwidth={true}>
                            <Select>
                                <Select.Option> Breakfast </Select.Option>
                                <Select.Option> Lunch </Select.Option>
                                <Select.Option> Dinner </Select.Option>
                            </Select>
                        </Select.Container>

                </Control>
            </Field>


            <Field horizontal={true}>
                <Field.Label> <Label> Party Size </Label> </Field.Label>
                <Control expanded={true}>

                    <Select.Container fullwidth={true}>
                        <Select>
                            <Select.Option> Small </Select.Option>
                            <Select.Option> Medium </Select.Option>
                            <Select.Option> Large </Select.Option>
                        </Select>
                    </Select.Container>

                </Control>
            </Field>


            <Field horizontal={true}>
                <Field.Label> <Label> Description </Label> </Field.Label>
                <Control> <input type="text" name="name" /> </Control>
            </Field>


        </Container>
    );
};


export default CreateEvent;
