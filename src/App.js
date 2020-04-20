import 'firebase/database';
// import logo from './logo.svg';
import './App.css';
import 'rbx/index.css';
import 'firebase/auth';
import firebase from './shared/firebase.js'
import { Button,Navbar, Container, Title } from 'rbx';
import React, { useState, useEffect } from 'react';
import RestaurantList from "./components/RestaurantList";
import HeaderBar from "./components/HeaderBar";
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'firebase/auth';

const db = firebase.database().ref();

const App = () => {
  const [user,setUser] = useState(null);
  const [initialRender, setInitialRender] = useState(true);
  const [schedule, setSchedule] = useState({ title: '', events: [] });
  const [currPage, setCurrPage] = useState("login");


  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("Successfully signed out.");
      })
      .catch(() => {
        alert("Couldn't log out. Try again.");
      });
  };

  useEffect(() => {

    //authentication
    firebase.auth().onAuthStateChanged(user=>{
      setUser(user);
      setInitialRender(false);
      console.log(user);
    })

    const handleData = snap => {
      if (snap.val()) setSchedule(snap.val());
    };
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);


  return (!initialRender && (
    <Router>

        <HeaderBar title={ schedule.title } user={user}/> 
      
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/restaurant" component={()=> <RestaurantList events={ schedule.events }/>} />
        </Switch>
      </Router>
    ));
};


export default App;
