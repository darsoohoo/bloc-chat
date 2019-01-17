import React, { Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signedIn: false
        };
    }


    signInWithPopup(e) {
        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup( provider );
    }

    signOut(e) {
        this.props.firebase.auth().signOut();
    }



    render() {
        return (
            <section>
                <input type="button" value={this.state.username} onclick={(e) => this.signInWithPopup(e)} >Sign-in</input>
                <input type="button" onclick={(e) => this.signOut(e)} >Sign-out</input>



            </section>

        );
    }
}



export default User;