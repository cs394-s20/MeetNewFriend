import firebase from 'firebase/app';
import 'firebase/database';
import React from 'react';
import logo from './logo.svg';
import './App.css';

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


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Change by Zhen Huang
        </p>
        <p>
          A new line of change :)
        </p>
        <p>
          Mary's commit here!
          Quinn's commit here
          Naeem's commit here!
        </p>
        <p> 
          Anam's commit here!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
