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
     
      
 
      <section >
        <div 
          className="demo-layout-transparent mdl-layout mdl-js-layout"
          style={{  backgroundImage: "url(" + "https://cdn.vox-cdn.com/uploads/chorus_image/image/45737830/Screen_2BShot_2B2015-02-20_2Bat_2B4.31.49_2BPM.0.0.png" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',}} >
          <header className="mdl-layout__header mdl-layout__header--transparent">
            <div className="mdl-layout__header-row">
           
             <span className="mdl-layout-title">Bloc Chat</span>
    
              <div className="mdl-layout-spacer"></div>
  

            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Title</span>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
              <div>
          <RoomList firebase={firebase} />
          </div>
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
