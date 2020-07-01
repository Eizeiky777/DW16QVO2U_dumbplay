import React, { Component, useState } from 'react';
import App from '../../App';

import { Nav, Navbar, Button, Form, Image, Modal, Dropdown, DropdownButton } from 'react-bootstrap';
import logoImage from './data/DUMBSOUND.png';
import photoProfile from "./data/user_photo.png";

import { connect } from "react-redux";
import { register, login } from "../redux/actions/auth";
import { getLoginDetail } from "../redux/actions/loginDetail";


//import { useHistory } from "react-router-dom";
// import {  Link } from 'react-router-dom';

const LoginUser = ({  onHide, show, login, setOpen }) => {
    //let history = useHistory();
    const [datas, setData] = useState({});
    const handleChange = (event) => {
        // console.log(event.target.name)
        setData({ ...datas, [event.target.name]: event.target.value })
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(datas);
        login(datas);
        setData({});
        setOpen();
    };

    return (
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >

        <Modal.Body className="bg-dark rounded pb-4">
            <h1 className="bg-dark text-light d-flex justify-content-center" >Login</h1>
            <Form style={{width:"50%", margin:"auto"}} onSubmit={handleSubmit} >
                <Form.Group controlId="formBasicEmail">
                <Form.Label className="text-light">Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        className="bg-light"
                        name="email"
                        value={datas.email ? datas.email : ""}
                        onChange={handleChange}
                    />
                    <Form.Text className="text-light">
                        * We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
            
                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="text-light">Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        value={datas.password ? datas.password : ""}
                        onChange={handleChange}
                    />
                </Form.Group>
                
                <Button type="submit" variant="danger" block className="text-light" onClick={onHide}>
                    Login
                </Button>
                <p className="text-light">don't have an account ? just <a href="#test">click here</a></p>
                <div className="text-right mt-2">
                <Button onClick={onHide} className="btn btn-outline-dark bg-dark" >x</Button>
                </div>
            </Form>
        </Modal.Body>
        
    </Modal>
    );
}
const Registered = ({  onHide, show, register, auth:{ data: authLog} }) => {

    const [datas, setData] = useState({});

    const handleChange = (event) => {
        // console.log(event.target.name)
        setData({ ...datas, [event.target.name]: event.target.value })
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(datas);
        register(datas);
        setData({});
    };
    
    const addX = Object.values(authLog);
    if (!(Object.keys(addX).length === 0 && addX.constructor === Object)){
        // console.log(addX); // check redux
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            >
        
            <Modal.Body className="bg-dark rounded pb-4" >
                <h1 className="bg-dark text-light d-flex justify-content-center" >Register</h1>
                <Form style={{width:"50%", margin:"auto"}} onSubmit={handleSubmit}>
                                    
                    <Form.Group controlId="formBasicName">
                        <Form.Label className="text-light">Full Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Full Name" 
                            name="fullName"
                            value={datas.fullName ? datas.fullName : ""}
                            onChange={handleChange}
                            />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="text-light">Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            className="bg-light"
                            name="email"
                            value={datas.email ? datas.email : ""}
                            onChange={handleChange}
                            />
                        <Form.Text className="text-light">
                        * We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="text-light">Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            value={datas.password ? datas.password : ""}
                            onChange={handleChange}
                            />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.SelectCustomRole">
                        <Form.Label className="text-light">list as</Form.Label>
                        <Form.Control as="select" custom
                            name="listAs"
                            onChange={handleChange}
                            >
                            <option>choose</option>
                            <option>user</option>
                        </Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId="exampleForm.SelectCustomGender">
                        <Form.Label className="text-light">Gender</Form.Label>
                        <Form.Control as="select" custom
                            name="gender"
                            onChange={handleChange}
                            >
                        <option>Gender</option>
                        <option>male</option>
                        <option>female</option>
                        </Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPhone">
                        <Form.Label className="text-light">Phone</Form.Label>
                        <Form.Control 
                            type="text"
                            name="phone" 
                            placeholder="Phone"
                            value={datas.phone ? datas.phone : ""}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicAddress">
                        <Form.Label className="text-light">Address</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Address"
                            name="address" 
                            value={datas.address ? datas.address : ""}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    
                    <Button onClick={onHide} type="submit" variant="light" size="lg" className="text-danger" block>
                        Register
                    </Button>
                    <p className="text-light">don't have an account ? just <a href="#test">click here</a></p>
                    <div className="text-right mt-2">
                    <Button onClick={onHide} >Close</Button>
                    </div>
                </Form>
            </Modal.Body>
        
        </Modal>

        
    );
}


class Header extends Component {

    constructor(){
        super()
        this.state = {
            modalShow: false, modalRegister: false
        }
    }
    

    render(){   
        const { modalShow, modalRegister } = this.state;
        const { data: dataLogger } = this.props.auth;
        if (!(Object.keys(dataLogger).length === 0 && dataLogger.constructor === Object)){
            // console.log(dataLogger)
        }

        const statusLogger = Object.values(dataLogger);
        let subscribe = statusLogger[7] === true ? true : false;
        // console.log(statusLogger)
    
        let token = localStorage.getItem('token');
        let stat =  localStorage.getItem('role');
        let unlock = token !== null ? true : false;
        
        let open = stat === "admin" || subscribe ? true : false;


        return (
        <>
            <Navbar bg="transparent" expand="lg" style={{position: "fixed", width: "100%"}} >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" style={dumbFlix}>
                <a href="/"> <Image src={logoImage} fluid  className="py-4" style={{width: 150}}/></a>
                </Nav>
                
                <Form inline>

                    { !unlock && (<div>
                        <Button variant="btn btn-light mr-3 text-danger" style={{width:100}} onClick={() => this.setState({modalRegister:true})}>Register</Button>
                        <Button variant="btn btn-danger" style={{width:100}} onClick={() => this.setState({modalShow:true})}>Login</Button>
                    </div>)}
                    { unlock && (
                        <div>
                        <DropdownButton
                        alignRight
                        title={<Image src={photoProfile} fluid />}
                        id="dropdown-menu-align-right"
                        variant="transparent"
                        >

                            { stat === 'user' ? (<Dropdown.Item eventKey="2" href={"/transaction_user"}> <i className='fas fa-money-check-alt pr-2'></i>Pay</Dropdown.Item> ) :
                                    (<>
                                        <Dropdown.Item eventKey="2" href={"/transactions"}> <i className='fas fa-chalkboard-teacher pr-1'></i> Admin</Dropdown.Item>
                                        <Dropdown.Item eventKey="3" href={"/add_music"}> <i className='fas fa-file-audio' style={{width: 20}}></i> Add Music </Dropdown.Item>
                                        <Dropdown.Item eventKey="4" href={"/add_artist"} > <i className='fas fa-user-plus' style={{width: 20}}></i> Add Artist </Dropdown.Item>
                                    </>
                                    )      
                            }
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="5" 
                                onClick={() => {
                                    localStorage.removeItem('token') 
                                    localStorage.removeItem('role')
                                    localStorage.removeItem('id')
                                }}
                                href="/"> <i className='fas fa-sign-out-alt pr-2' style={{color: 'red'}}></i> Logout
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                    )}

                </Form>
            </Navbar.Collapse>
            </Navbar>

            <App 
                open={open}  
                login={() => this.setState({modalShow:true})}                  
            />
            

            <LoginUser
                show={modalShow}
                onHide={() => this.setState({modalShow: false})}
                login={this.props.login}
                auth={this.props.auth}
                setOpen={this.props.setOpen}
            />

            <Registered
                show={modalRegister}
                onHide={() => this.setState({modalRegister: false})}
                register={this.props.register}
                auth={this.props.auth}
            />
        </>
        );
    }
}


const dumbFlix = {
    marginRight: 'auto'
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        loginDetail: state.loginDetail
    };
};

export default connect(mapStateToProps, { register, login, getLoginDetail })(Header);

