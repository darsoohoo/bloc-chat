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
        }
    }

    render() {
        return (
            <section  className="rooms create-room-form">
                <div className="flex-container create-room-form" >
                    <form className="create-room create-room-form" onSubmit={(e) => this.handleCreate(e)}>
                        <div className="flex-container mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input name="createRoomInput" className="flex-container mdl-textfield__input" type="text" value={this.state.newRoomName} onChange={(e) => this.handleChange(e)}  />
                            <label className="flex-container mdl-textfield__label" htmlFor="createRoomInput">Create a room...</label>
                        </div>
                        <input type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="addEthereum()" value="Create"/>
                    </form>
                    <ul className="mdl-navigation room-list">

                        {
                        this.state.rooms.map(room => (
                        <li className="room-item mdl-navigation__link"
                        key={room.key}
                        >
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