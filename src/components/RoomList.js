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
    
        this.roomsRef.on('child_removed', snapshot => {
          this.setState({rooms: this.state.rooms.filter((room) => room.key !== snapshot.key)});
        });
    
        this.roomsRef.on('child_changed', snapshot => {
          /*let changedRoom = this.state.rooms.filter((room) => room.key === snapshot.key)[0];
          let allRooms = this.state.rooms.filter((room) => room.key !== snapshot.key);
          changedRoom.name = snapshot.val().name;
          allRooms.concat(changedRoom);
          console.log(allRooms);
          this.setState({rooms: allRooms});*/
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