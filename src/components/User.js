import React, { Component} from 'react';
import './User.css'

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: 'Guest',
        };
      

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
    }



    render() {
        return (
            <section>
                <div className="username_container">
                    <a  className="display-name">{this.props.user ? "" + this.props.user.displayName : ''}</a>
                    {this.props.user ? <a className="signin-status" onClick={() => this.signOut()}>Sign Out</a> : <a className="signin-status" onClick={() => this.signIn()}>Sign In</a>}
              
                   
                </div>
            </section>

        );
    }
}



export default User;