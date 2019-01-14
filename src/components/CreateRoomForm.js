import React, { Component } from 'react';
import './CreateRoomForm.css'

class CreateRoomForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flex-container" id="create-room-form">
            <form action="#">
                <div className="flex-container mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="flex-container mdl-textfield__input" type="text" id="sample3"/>
                    <label className="flex-container mdl-textfield__label" for="sample3">Create a room...</label>
                </div>
            </form>
        </div>  
        );
    }
}

export default CreateRoomForm;