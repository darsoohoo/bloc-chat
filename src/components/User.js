import React, { Component } from 'react';
import './User.css'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: 'Guest',
        };

        this.uiConfig = {
            signInFlow: "popup",
            signInOptions: [
                this.props.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                this.props.firebase.auth.FacebookAuthProvider.PROVIDER_ID
            ],
            callbacks: {
                signInSuccess: () => false
            }
        }
        this.usersRef = this.props.firebase.database().ref('users');

    }

    componentDidMount() {
        this.props.firebase.auth().onAuthStateChanged(user => {
            this.props.setUser(user);
        });
    }


    signIn() {
        const provider = new this.props.firebase.auth.GoogleAuthProvider();

        this.props.firebase
            .auth()
            .signInWithPopup(provider);



    }

    signOut() {
        this.props.firebase
            .auth()
            .signOut()
            .then(alert('Sign out successful'));
        {

        }
    }



    render() {
        return (
            <section>
                <div className="username_container">
                    <a href="#" className="display-name">
                        {this.props.user ? "" + this.props.user.displayName : ''}
                    </a>
                    {this.props.user ? <a href="#" className="signin-status" onClick={() => this.signOut()}>Sign Out</a> : 
                    <StyledFirebaseAuth className="signin-buttons"
                        uiConfig={this.uiConfig}
                        firebaseAuth={this.props.firebase.auth()}
                    />}
                </div>
            </section>

        );
    }
}



export default User;