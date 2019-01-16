import React, { Component } from 'react';
import faker from 'faker';
import './MessageList.css';

class MessageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            newMessage: ''

        };
        this.messagesRef = this.props.firebase.database().ref('messages');
    }

    componentDid() {
        this.messagesRef.on('child_added', snapshot => {
            const message = snapshot.val();
            message.key = snapshot.key;
            this.setState({ messages: this.state.messages.concat( message ) })
        });
    }

    handleChange(event) {
        this.setState({ newMessage: event.target.value});
    }



    sendMessage(event) {
        event.preventDefault();
        if(this.state.newMessage !== '') {
            this.messagesRef.push({
                content: this.state.newMessage,
                username: '',
                sentAt: '',
                roomId: ''
            });
        }
    }


    render() {
    




        return (
            <section className="ui comments" >   
            <div className="ui comments message-list">
                <h3 className="ui dividing header"></h3>

                {
                    this.state.messages.map(message => (

                        <div className="comment"
                            key={message.key}
                        >
                        <a href="/" className="avatar">
                            <img alt="avatar" src={faker.image.avatar()}/>
                        </a>
                        <div className="content">
                         <a className="user">{message.username}</a>
                        <div className="metadata">
                            <span className="date">{message.key.sentAt}</span>
                        </div>
                        <div className="text">
                            {message.content}
                        </div> 
                        <div className="actions">
                                <a classNAme="reply">Reply</a>
                                </div>   
                            </div>
                        </div>

                    ))
              
                }


            </div>
            <form className="ui reply form ui-reply-form flex-container" onSubmit={(e) => this.sendMessage(e)}>
                <div className="field flex-container mdl-textfield__input">
                    <input placeholder="Type a new message" value={this.state.newMessage} onChange={(e) => this.handleChange(e)} />
                </div>
 
            </form>
            </section>
        );
    }
}


export default MessageList;