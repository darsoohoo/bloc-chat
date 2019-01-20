import React, { Component} from 'react';

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
                <div className="mdl-navigation__link" href="">
                    <a>{this.props.user ? " " + "Hey, " + this.props.user.displayName : ' Guest'}</a>
                    {this.props.user ? <a eventKey="2" onClick={() => this.signOut()}>Sign Out</a> : <a eventKey="2" onClick={() => this.signIn()}>Sign In</a>}
                </div>
       
            
        



            </section>

        );
    }
}



export default User;