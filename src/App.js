import 'firebase/database';
// import logo from './logo.svg';
import './App.css';
import 'rbx/index.css';
import firebase from './shared/firebase.js'
import { Button, Container, Title } from 'rbx';
import React, { useState, useEffect } from 'react';
import RestaurantList from "./components/RestaurantList";
import HeaderBar from "./components/HeaderBar";
import CreateEvent from "./components/CreateEvent";
import Popup from "reactjs-popup";

const db = firebase.database().ref();

const App = () => {
  const [schedule, setSchedule] = useState({ title: '', events: [] });
  const [currPage, setCurrPage] = useState("events");
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) setSchedule(snap.val());
    };
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);

  const updatePage = (l) => {
    setCurrPage(l);
  }

  const handlePage = () => {
    if (currPage === "events"){
      return (
      <Container>
        <HeaderBar title={ schedule.title } />
        <Popup trigger={<Button> Create Event </Button>} position="right center">
          <CreateEvent>Popup content here !!</CreateEvent>
        </Popup>
        <RestaurantList events={ schedule.events } />
      </Container>
      );
    }
    else if (currPage === "home"){
      return (
        <Container>
          <HeaderBar title= { schedule.title } />
        </Container>
      );
    }
  };

  const page = handlePage();

  return (
    <Container>
      {page}
    </Container>
    );
};


export default App;
