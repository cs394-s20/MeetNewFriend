import React from 'react';
import { Button, Container, Field, Control, Label, Select } from "rbx";
import { useState } from 'react';
import Restaurant from "./Restaurant";
import cuisine from '../shared/data';
import ImageUploader from 'react-images-upload';
import { useForm , ErrorMessage} from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import firebase from '../shared/firebase';
import tags from '../shared/tags';




const CreateEvent = (host, props) => {

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
        const itemsRef = firebase.database().ref('events');
        var time_start = "00:00";
        if (data["time-start"] != undefined) {
            time_start = String(data["time-start"]["_d"]);
            var arr = time_start.split(" ");
            time_start = arr[4].substring(0, 5);
        }
        var time_end = "00:00";
        if (data["time-end"] != undefined) {
            time_end = String(data["time-end"]["_d"]);
            var arr = time_end.split(" ");
            time_end = arr[4].substring(0, 5);
        }
        var date = data["date"];
        date = date.toISOString().substring(0, 10);
        var name = host["name"]["name"]["displayName"];
        const item = {
            "cuisine" : data["cuisine"],
            "date" : date,
            "host": name,
            "group-size" : "1/" + data["party-size"],
            "time" : time_start + "-" + time_end,
            "id" : itemsRef.key,
            "name" : data["restaurant-name"],
            "imageURL": "https://firebasestorage.googleapis.com/v0/b/meetnewfriends-6e495.appspot.com/o/img%2Fbuffalo.jpg?alt=media&token=ed14f7b4-53c9-4ff9-a9db-7787bced5231",
            "description": data["description"],
            "people": [name],
            "tag": data["tag"]
        };
        // console.log(name);
        // console.log(host);
        // console.log(date);
        // console.log(item);
        itemsRef.push(item);
        alert("Event is successfully created!");
        window.location.reload(false);
    };

    // You can also register inputs manually, which is useful when working with custom components
    // and Ref is not accessible. This is actually the case when you are working with React Native or
    // custom component like react-select.
    // By using a custom register call, you will need to update the input value with setValue,
    // because input is no longer registered with its ref.
    React.useEffect(() => {
        register({ name: "date" }, { required: true });
        register({ name: "time-start" }, { required: true });
        register({ name: "time-end" }, { required: true });
    }, []);

    const party_size = [];

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
                                <textarea type="text" name="restaurant-name" ref={register({ required: true })}/>
                                <ErrorMessage errors={errors} name="restaurant-name" message="This is required" />
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
                            <Field.Label> <Label> Tags </Label>
                                <Control expanded={true}>
                                    <Select.Container fullwidth={true}>
                                        <Select name="tags" ref={register}>
                                            {Object.values(tags).map(value =>
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
                                    <ErrorMessage errors={errors} name="date" message="This is required" />
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
                                    <ErrorMessage errors={errors} name="time-start" message="This is required" />
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
                                    <ErrorMessage errors={errors} name="time-end" message="This is required" />
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
