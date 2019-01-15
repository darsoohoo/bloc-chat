import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import CreateRoomForm from './components/CreateRoomForm';




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
     
      
 
      <section >
        <div 
          className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
          mdl-layout--fixed-header"
          style={{  backgroundImage: "url(" + "http://i.imgur.com/HUgVfve.png" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',}} >
            <header className="mdl-layout__header mdl-layout__header--transparent">
            <div className="mdl-layout__header-row">
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation">
                <a className="mdl-navigation__link" href="">Your Name</a>
                <a className="mdl-navigation__link" href="">Sign in</a>
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Bloc Chat</span>
            <CreateRoomForm />
            <nav className="mdl-navigation">
              <RoomList firebase={firebase} />
            </nav>
          </div>
          <main className="mdl-layout__content">


          
      



          

          </main>
        </div>
      

      </section>


          );
        }
      }

export default App;
