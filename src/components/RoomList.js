import React, { Component } from 'react';



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

    render() {
        return (
        <section className="mdl-navigation__link" className="rooms">
        
          {
            this.state.rooms.map(room => (
              <a className="rooms mdl-navigation__link"
              key={room.key}
              >
                {room.name}
              </a>
          



            )
        )
            }
        </section>
        );
    }
}




export default RoomList;