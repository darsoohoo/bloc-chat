import React, { Component } from 'react';
import faker from 'faker';
import './MessageList.css';


class MessageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            newMessage: '',
           
          

        };
        this.messagesRef = this.props.firebase.database().ref('messages');
   
    }

    componentDidMount() {
        this.messagesRef.on('child_added', snapshot => {
            const message = snapshot.val();

            message.key = snapshot.key;
            this.setState({ messages: this.state.messages.concat( message ) })
          
        });
    }

    handleChange(event) {
        this.setState({ newMessage: event.target.value});
    }

    timeConverter(unix_time){
        const date = new Date(unix_time);
        const month = date.getUTCMonth(unix_time);
        const day = date.getDate();
        const hours = date.getHours()< 12 ? date.getHours() : date.getHours() - 12 ;
        const amPm = date.getHours() < 12 ? " AM" : " PM";
        const minutes =  date.getMinutes();
        const formattedTime = (month + 1) + '/' + day + ' ' + hours + ':' + minutes + amPm + ' ' ;
        return formattedTime;
      }



    sendMessage(event, activeRoomId) {
        event.preventDefault();
        if(this.state.newMessage !== '') {
            this.messagesRef.push({
                content: this.state.newMessage,
                username: '',
                sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
                roomId: this.props.activeRoomId
            });
        }
    }

    render() {




        return (
            <section className="ui comments" >   
            <div className="ui comments message-list">
                <h3 className="ui dividing header"></h3>

                {
             
                    this.state.messages
                    .filter(message => message.roomId === this.props.activeRoomId)
                    .map(message => (
                        <div
                            className="comment"
                            key={message.key}
                        >
                        <a href="/" className="avatar">
                            <img alt="avatar" src={faker.image.avatar()}/>
                        </a>
                        <div className="content">
                                <a className="user">{this.props.user ? "" + this.props.user.displayName : 'Guest'}</a>
                        <div className="metadata">
                            <span className="date">{this.timeConverter(message.sentAt)}</span>
                        </div>
                        <div className="text">
                            {message.content}
                        </div> 
                        
                        </div>
                        </div>
                    ))
              
                }


            </div>
            <form className="ui reply form ui-reply-form flex-container" value={this.state.activeRoomId} onSubmit={(e) => this.sendMessage(e)}>
                <div className="field flex-container mdl-textfield__input">
                    <input placeholder="Type a new message" value={this.state.newMessage} onChange={(e) => this.handleChange(e)} />
                </div>
 
            </form>
            </section>
        );
    }
}


export default MessageList;