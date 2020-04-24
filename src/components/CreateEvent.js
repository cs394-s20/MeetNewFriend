import React from 'react';
import { Button, Container, Field, Control, Label, Select } from "rbx";
import { useState } from 'react';
import Restaurant from "./Restaurant";
import cuisine from '../shared/data';
import ImageUploader from 'react-images-upload';
import { useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';




const CreateEvent = props => {

    const [pictures, setPictures] = useState([]);
    const [date, setDate] = useState();
    const [time, setTime] = useState();

    const now = moment().hour(0).minute(0);

    const onDrop = picture => {
        setPictures([...pictures, picture]);
        console.log("pictures");
        console.log(pictures)
    };

    const { register, handleSubmit, errors, setValue} = useForm(); // initialise the hook
    const onSubmit = data => {
        console.log(data);
    };

    // You can also register inputs manually, which is useful when working with custom components
    // and Ref is not accessible. This is actually the case when you are working with React Native or
    // custom component like react-select.
    // By using a custom register call, you will need to update the input value with setValue,
    // because input is no longer registered with its ref.
    React.useEffect(() => {
        register({ name: "date" }, { required: true });
        register({ name: "time-start" }, { required: false });
        register({ name: "time-end" }, { required: false });
    }, []);

    const party_size = []

    for (var i = 1; i <= 30; i++) {
        party_size.push(
            <Select.Option key={i}> {i} </Select.Option>
            // <li key={index}>{value}</li>
    )}


    return (

        <Container>


            <ul className='popup_create'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <li >
                        <Field horizontal={true}>
                            <Field.Label> <Label> Restaurant Name </Label>
                                <textarea type="text" name="restaurant-name" ref={register}/>
                            </Field.Label>

                        </Field>
                    </li>

                    <li>
                        <Field horizontal={true}>
                            <Field.Label> <Label> Cuisine </Label>
                                <Control expanded={true}>
                                    <Select.Container fullwidth={true}>
                                        <Select name="cuisine" ref={register}>
                                            {Object.values(cuisine).map(value =>
                                                <Select.Option key={value}> {value} </Select.Option>)
                                            }
                                        </Select>
                                    </Select.Container>
                                </Control>
                            </Field.Label>
                        </Field>
                    </li>


                    <li>
                        <Field horizontal={true}>
                            <Field.Label> <Label> Date </Label>
                                <Control expanded={true}>
                                    <DatePicker
                                        isClearable
                                        selected={date}
                                        onChange={val => {
                                            setDate(val);
                                            setValue("date", val);// Here we are setting the value for the registered input.
                                        }}
                                    />
                                </Control>
                            </Field.Label>

                        </Field>
                    </li>

                    <li>
                        <Field horizontal={true}>
                            <Field.Label> <Label> Time Start </Label>
                                <Control expanded={true}>
                                    <TimePicker
                                        defaultValue={now}
                                        showSecond={false}
                                        inputReadOnly
                                        onChange={val => {
                                            setTime(val);
                                            setValue("time-start", val);// Here we are setting the value for the registered input.
                                        }}
                                    />
                                </Control>
                            </Field.Label>

                        </Field>
                    </li>

                    <li>
                        <Field horizontal={true}>
                            <Field.Label> <Label> Time End </Label>
                                <Control expanded={true}>
                                    <TimePicker
                                        defaultValue={now}
                                        showSecond={false}
                                        inputReadOnly
                                        onChange={val => {
                                            setTime(val);
                                            setValue("time-end", val);// Here we are setting the value for the registered input.
                                        }}
                                    />
                                </Control>
                            </Field.Label>

                        </Field>
                    </li>


                    <li>
                        <Field horizontal={true}>
                            <Field.Label> <Label> Party Size </Label>
                                <Control expanded={true}>

                                    <Select.Container fullwidth={true}>
                                        <Select name="party-size" ref={register}>
                                            {party_size}
                                            {/*<Select.Option> Small </Select.Option>*/}
                                            {/*<Select.Option> Medium </Select.Option>*/}
                                            {/*<Select.Option> Large </Select.Option>*/}
                                        </Select>
                                    </Select.Container>

                                </Control></Field.Label>

                        </Field>
                    </li>

                    <li>
                        <Field horizontal={true}>
                            <Field.Label> <Label> Description </Label>
                                <textarea type="text" name="description" ref={register} />
                            </Field.Label>
                        </Field>
                    </li>

                    {/*<input name="firstname" ref={register} /> /!* register an input *!/*/}

                    {/*<input name="lastname" ref={register({ required: true })} />*/}
                    {/*{errors.lastname && 'Last name is required.'}*/}

                    {/*<input name="age" ref={register({ pattern: /\d+/ })} />*/}
                    {/*{errors.age && 'Please enter number for age.'}*/}

                    <Button type="submit" color="info"> submit </Button>
                </form>


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
