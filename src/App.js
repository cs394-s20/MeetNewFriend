import 'firebase/database';
import logo from './logo.svg';
import './App.css';
import 'rbx/index.css';
import firebase from './shared/firebase.js'
import { Button, Container, Title } from 'rbx';
import React, { useState, useEffect } from 'react';
import RestaurantList from "./components/RestaurantList";
import HeaderBar from "./components/HeaderBar";

const db = firebase.database().ref();

const App = () => {
  const [schedule, setSchedule] = useState({ title: '', events: [] });

  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) setSchedule(snap.val());
    };
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);

  return (
    <Container>
      <HeaderBar title={ schedule.title } />
      <RestaurantList events={ schedule.events } />
    </Container>
    );
};


export default App;
