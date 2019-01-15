import React, { Component } from 'react';
import ChatRoom from './ChatRoom';

class MainSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="main-section"> 
                <main className="mdl-layout__content">
                <div className="chat-box">
                <ChatRoom />
                 </div>
                </main>
            </section>
        );
    }
}



export default MainSection;