import React, { Component } from 'react';
// import CUSTOMER from './customer/customers';
import { Container,Row,Col, Dropdown } from 'react-bootstrap';
import { connect } from "react-redux";
import { checkTransaction } from "../redux/actions/listTransactions";
import moment from 'moment';

class ListTransactions extends Component {

    componentDidMount() {
        this.props.checkTransaction()
    }

    render(){

        const { data: listTransactions } = this.props.listTransaction;
        console.log(listTransactions);
        let LIST = Object.values(listTransactions);

        let color_second = '#2B2B2B';
        let color_third = '#1F1F1F';
        let x = '';
        let num = 0;

        return (
            <div className="" style={{ background: 'black'}}>
                <div style={{height: 80, background: "#1F1F1F"}}></div>
            <Container className='mt-5 text-left text-white font-weight-bold' style={{width: '100%', height: 20, marginLeft:'15%'}}>
                <Row>
                    <Col>
                        <h5>Incoming Transaction</h5>
                    </Col>
                </Row>
            </Container>
            <Container className='  mt-5 bg-dark text-white' style={{width: 900, height: '100%'}}>
                <Row style={{fontSize: 14, color: '#EE4622', backgroundColor: '#1F1F1F'}} className="py-3 text-left  border-bottom border-light">
                    <Col md={1} xs={1}>
                    No
                    </Col>
                    <Col md={2} xs={1}>
                    Users
                    </Col>
                    <Col md={2} xs={1}>
                    Bukti Transfer
                    </Col>
                    <Col md={2} xs={1}>
                    Remaining Active
                    </Col>
                    <Col md={2} xs={1}>
                    Status User
                    </Col>
                    <Col md={2} xs={1}>
                    Status payment
                    </Col>
                    <Col md={1} xs={1}>
                    Action
                    </Col>
                </Row>
                {
                LIST.map( customer => { 
                    let statusX = customer.User.subscribe
                    let STATUS_PAYMENT = customer.status
                
                    let color = '#FF0742'
                    let colorPay = ''
                    let colorAct = '#1C9CD2'

                    let stat = 'Not Active'
                    let pay = 'Pending'

                    if ( statusX === 'Active' || statusX === true ){
                        color = '#0ACF83'
                        stat = 'Active'
                    }

                    if ( STATUS_PAYMENT === 'Active' || STATUS_PAYMENT === 'Approved' ){
                        colorPay = '#0ACF83'
                        pay = 'Approved'
                    }else if ( STATUS_PAYMENT === 'pending'){
                        colorPay = '#F58033'
                    }else if (STATUS_PAYMENT === 'Cancel'){
                        pay = 'Cancel'
                    }

                    
                    x = customer.id % 2 === 1 ? (x = color_second) : (x = color_third)
                    

                    return <div key={customer.id} className="text-left">
                        <Row style={{fontSize: 14, background: x }} className="my-0 dropdrop2    ">

                            <Col md={1}  xs={1} className=' border-bottom border-light py-3'>
                                {++num}
                            </Col>
                            <Col md={2} xs={1} className=' border-bottom border-light py-3'>
                                {customer.User.fullName}
                            </Col>
                            <Col md={2} xs={1} className=' border-bottom border-light py-3'>
                                {customer.attach.substr(-9)}
                            </Col>
                            <Col md={2} xs={1} className=' border-bottom border-light py-3'>
                                { moment(customer.dueDate).diff(moment(customer.startDate), 'days', true)} days
                            </Col>
                            <Col md={2} style={{color: `${color}`, fontWeight: 'bold'}} xs={1} className=' border-bottom border-light py-3'>
                                {stat}
                            </Col>
                            <Col md={2} style={{color: `${colorPay}`, fontWeight: 'bold'}} xs={1} className=' border-bottom border-light py-3'>
                                <span style={{color: `${colorPay}`}}> {pay} </span>
                            </Col>
                            <Col md={1} xs={1} className=' border-bottom border-light'>
                            <Dropdown >
                                    <Dropdown.Toggle variant="" id="dropdown-basic" className="caret dropdrop">
                                        <span><i className='fas fa-caret-down' style={{color: `${colorAct}`, fontSize: 18}}></i></span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu-list-js">
                                        <Dropdown.Item href="#/action-1" className="text-success">
                                                Approved
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className="text-danger">
                                                Cancel
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className="text-warning">
                                                Pending
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                </div>
                })
            }
        </Container>
        <div style={{height: 400}}></div>
    </div>        
        );
    }
    }

const mapStateToProps = (state) => {
    return {
        listTransaction: state.listTransaction
    };
};

export default connect(mapStateToProps, { checkTransaction })(ListTransactions);


