import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';







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
    constructor(props) {
        super(props);
    
        this.state = {
          activeRoom: null,
          activeRoomId: null,
          isSignedIn: false,
          user: 'Guest'
        };


        this.setActiveRoom = this.setActiveRoom.bind(this);
        this.setUser = this.setUser.bind(this);
      }
    
      setActiveRoom(room) {
        this.setState({
          activeRoom: room.name,
          activeRoomId: room.key,
        });
      }

      setUser(user) {
        this.setState({
          user: user
        });
      }


     

  render() {
    return (
   
      <section >
        <div 
          className="mdl-layout mdl-js-layout mdl-layout--fixed-header"
          style={{  backgroundImage: "url(" + "http://i.imgur.com/HUgVfve.png" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'}} >
            <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
            <span class="mdl-layout-title">Float Chat</span>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation">
                <User 
                firebase={firebase} 
                user={this.state.user} 
                setUser={(user) => this.setUser(user)}  
                className="mdl-navigation__link"
                 />
              </nav>
            </div>
          </header>
          <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Cloud Chat</span>
            <nav className="mdl-navigation ">
              <RoomList 
              firebase={firebase} 
              setActiveRoom={this.setActiveRoom} 
              user={this.state.user} 
              setUser={(user) => this.setUser(user)} />
            </nav>
          </div>
          <main className="mdl-layout__content">
            <MessageList 
            firebase={firebase} 
            activeRoom={this.state.activeRoom}
            activeRoomId={this.state.activeRoomId} 
            user={this.state.user} 
            setUser={(user) => this.setUser(user)} />
          </main>
          </div>
        </div>
      </section>
          );
        }
      }

export default App;
