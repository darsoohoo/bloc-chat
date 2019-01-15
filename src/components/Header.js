import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div 
            className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header"
            style={{  backgroundImage: "url(" + "http://i.imgur.com/HUgVfve.png" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',}} >
            <header className="mdl-layout__header mdl-layout__header--transparent">
            <div className="mdl-layout__header-row">
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation">
                <a className="mdl-navigation__link" href="">Your Name</a>
                <a className="mdl-navigation__link" href="">Sign in</a>
              </nav>
            </div>
          </header>
          </div>

        );
    }
}

export default Header;