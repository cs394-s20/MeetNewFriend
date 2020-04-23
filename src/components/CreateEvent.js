import React from 'react';
import { Button, Container, Field, Control, Label, Select } from "rbx";
import { useState } from 'react';
import Restaurant from "./Restaurant";
import cuisine from '../shared/data';
import ImageUploader from 'react-images-upload';


const CreateEvent = props => {

    const [pictures, setPictures] = useState([]);

    const onDrop = picture => {
        setPictures([...pictures, picture]);
        console.log("pictures");
        console.log(pictures)
    };

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

                <ImageUploader
                    {...props}
                    withIcon={true}
                    withPreview={true}
                    onChange={onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                />

                {
                    pictures.map( picture =>
                        <div> {picture.name} </div>
                    )
                }


            </ul>


        </Container>



    );
};


export default CreateEvent;
