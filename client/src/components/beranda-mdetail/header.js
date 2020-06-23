import React, { Component } from 'react';
// import { Nav, Navbar, Button, Form, Image, Modal, Dropdown, DropdownButton } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";
// import userPhoto from './data/user_photo.png';
// import logoImage from './data/logo.png';

import Banner from './jumbotron';

class HeaderMdetail extends Component {

    constructor(){
        super()
        this.state = {
            modalShow: false, modalRegister: false
        }
    }
    
    render(){   
        const {id, genre, status} = this.props; // ini berasal dari props App
        
        return (
            <>
                {
                    <Banner ids={id} genres={genre} statusX={status} />
                }
            </>
        );
    }
}


export default HeaderMdetail;
