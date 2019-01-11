import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAxgubQeHtmBk_uEIoqRJVsP08Rd4ffOuo",
    authDomain: "bloc-chat-2d269.firebaseapp.com",
    databaseURL: "https://bloc-chat-2d269.firebaseio.com",
    projectId: "bloc-chat-2d269",
    storageBucket: "bloc-chat-2d269.appspot.com",
    messagingSenderId: "565757088269"
  };
  firebase.initializeApp(config);
 

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
        </header>
        <main>
        <RoomList firebase={firebase} />
        </main>
      </div>
    );
  }
}

export default App;
