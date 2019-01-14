import React, { Component } from 'react';

class ChatRoom extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section >
                <div className="flex-container" id="chat-window">
                    <div className="flex-container" id="chat-log">
                        <div className="flex-container" id="chat-input">
                            <form action="#">
                                <div className="flex-container mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <input className="flex-container mdl-textfield__input" type="text" id="sample3"/>
                                    <label className="flex-container mdl-textfield__label" for="sample3">Text...</label>
                                </div>
                            </form>
                        </div>                      
                    </div>
                </div>
            </section>

        )
    }
}

export default ChatRoom;
