import React, { Component } from 'react';
import './RoomList.css'



class RoomList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: [],
            newRoomName: ''
           
        };
        this.roomsRef = this.props.firebase.database().ref('rooms');
      
    }

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
          const room = snapshot.val();
          room.key = snapshot.key;
          this.setState({ rooms: this.state.rooms.concat( room ) })
        });
      }
    
      handleChange(event) {
        this.setState({newRoomName: event.target.value});
      }
      
      handleCreate(event) {
        event.preventDefault();
        if(this.state.newRoomName !== '' ) {
            this.roomsRef.push({
                name: this.state.newRoomName
            });
            this.setState({newRoomName : ''})
        }

        

    }

    render() {
        return (

          
            <section  className="rooms create-room-form">
                <div className="flex-container create-room-form" >
                    <form className="create-room create-room-form" onSubmit={(e) => this.handleCreate(e)}>
                        <div id="create-room-label" className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <label className="mdl-textfield__label" htmlFor="createRoomInput">Create a room...</label>
                            <input id="create-room-input" name="createRoomInput" className="mdl-textfield__input" type="text" value={this.state.newRoomName} onChange={(e) => this.handleChange(e)}  /> 
                        </div>
                        <button id="create-button" type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Create</button>
                    </form>
                    <ul className="mdl-navigation room-list">

                        {
                        this.state.rooms.map(room => (
                        <li 
                        onClick={() => this.props.setActiveRoom(room)}
                        className="room-item mdl-navigation__link"
                        key={room.key}>
                            {room.name}    
                        </li>
                        )
                    )
                        }
                    
                    </ul>   
                </div>
            </section>
            
        );
    }
}




export default RoomList;