import firebase from 'firebase/app';
import 'firebase/database';
import logo from './logo.svg';
import './App.css';
import 'rbx/index.css';
import { Button, Container, Title } from 'rbx';
import React, { useState, useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyAiFra3hmMEore7QNZdZSUG0h3q3NUKg4I",
  authDomain: "meetnewfriends-6e495.firebaseapp.com",
  databaseURL: "https://meetnewfriends-6e495.firebaseio.com",
  projectId: "meetnewfriends-6e495",
  storageBucket: "meetnewfriends-6e495.appspot.com",
  messagingSenderId: "34155896062",
  appId: "1:34155896062:web:36d0f8b4d5ca94abc899af",
  measurementId: "G-WC91Q8GSP0"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

const Banner = ({ title }) => (
  <Title>{ title || 'loading...' }</Title>
);

const EventsList = ({ events }) => (
  <Button.Group>
    { events.map(event => <Event key ={event.id} event={ event } />) }
  </Button.Group>
);

const Event = ({ event }) => (
  <Button>
    Name : {event.name}
  </Button>
)


const App = () => {
  const [schedule, setSchedule] = useState({ title: '', events: [] });

  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) setSchedule(snap.val());
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);

  return (
    <Container>
      <Banner title={ schedule.title } />
      <EventsList events={ schedule.events } />
    </Container>
    );
};


export default App;