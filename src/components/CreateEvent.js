import React from 'react';
import { Button, Container, Field, Control, Label, Select } from "rbx";
import { useState } from 'react';
import Restaurant from "./Restaurant";
import cuisine from '../shared/data';


const CreateEvent = () => {

    return (

        <Container>
            <ul className='popup_create'>
                <li>
                    <Field horizontal={true}>
                        <Field.Label> <Label> Restaurant Name </Label>
                            <textarea type="text" name="name" />
                        </Field.Label>

                    </Field>
                </li>


                <li>
                    <Field horizontal={true}>
                        <Field.Label> <Label> Cuisine </Label>
                            <Control expanded={true}>
                                <Select.Container fullwidth={true}>
                                    <Select>
                                        {Object.values(cuisine).map(value =>
                                            <Select.Option> {value} </Select.Option>)
                                        }
                                    </Select>
                                </Select.Container>
                            </Control>
                        </Field.Label>



                    </Field>
                </li>

                <li>
                    <Field horizontal={true}>
                        <Field.Label> <Label> Time </Label>
                            <Control expanded={true}>

                                <Select.Container fullwidth={true}>
                                    <Select>
                                        <Select.Option> Breakfast </Select.Option>
                                        <Select.Option> Lunch </Select.Option>
                                        <Select.Option> Dinner </Select.Option>
                                    </Select>
                                </Select.Container>

                            </Control>
                        </Field.Label>

                    </Field>
                </li>

                <li>
                    <Field horizontal={true}>
                        <Field.Label> <Label> Party Size </Label>
                            <Control expanded={true}>

                                <Select.Container fullwidth={true}>
                                    <Select>
                                        <Select.Option> Small </Select.Option>
                                        <Select.Option> Medium </Select.Option>
                                        <Select.Option> Large </Select.Option>
                                    </Select>
                                </Select.Container>

                            </Control></Field.Label>

                    </Field>
                </li>

                <li>
                    <Field horizontal={true}>
                        <Field.Label> <Label> Description </Label> <textarea type="text" name="name" /></Field.Label>
                    </Field>
                </li>
            </ul>


        </Container>



    );
};


export default CreateEvent;
