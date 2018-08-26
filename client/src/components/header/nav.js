import React, { Component } from 'react';
import {Navbar,NavItem} from 'react-materialize';

export default class NavbarFeatures extends Component {
    render() {
        return (
            <Navbar brand='DevSeek' className='blue' right>
            <NavItem>Home</NavItem>
            <NavItem>Contact Us</NavItem>
          </Navbar>
        );
    }
}
