import React, { Component } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import Header from './beranda-pages-header';
import { connect } from "react-redux";
import { postTransaction } from "../redux/actions/transactions";


class TransactionUser extends Component {

    constructor(){
        super()
        this.state = {
            modalShow: false, modalRegister: false, 
            data: {}
        }
    }

    handleChange = (event) => {
        // console.log(event.target.files[0])
        this.setState({ data: event.target.files[0] });
    };
    
    handleSubmit = async (event) => {
        event.preventDefault();
        //console.log(this.state.data)
        this.props.postTransaction(this.state.data, localStorage.getItem('id'));
        this.setState({ data: {} });
    };

    render(){   

        // let pos = status === "admin" ? true : false;
        const { data: userTransaction } = this.props.transaction;
        let msg = false;
        if (!(Object.keys(userTransaction).length === 0 && userTransaction.constructor === Object)){
            console.log(userTransaction);
            msg = true;
        }
        // const { data: dataUsers, loading, error } = this.props.user;

        return (
            <>
            <Header />
            <div style={{ height: "100vh", paddingTop: 100, background: "#161616"}}>
                    <div className="text-white text-center">
                        <div className="pt-5 pb-4">
                            <h1>Premium</h1>
                        </div>
                        <div>
                            <p>Bayar sekarang dan nikmati streaming music yang kekinian dari <span style={{color: "#EE4622"}}>DUMB</span>SOUND</p>
                            <p style={{fontWeight: 'bold'}}><span style={{color: "#EE4622"}}>DUMB</span>SOUND : 0981312323</p>
                        </div>
                        <div className="pt-3">
                            <Container>
                                <Row>
                                    <Col xs={12} md={12}>
                                    { msg && (<p style={{color: 'green'}}>transaction success</p>) }
                                    <Form style={{width:"400px", margin:"auto"}} className="pb-5" onSubmit={this.handleSubmit} >
                                        <Form.Group controlId="formBasicNumber">
                                            <Form.Control 
                                                type="number" 
                                                placeholder="input your account number" 
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicfile">
                                            <Form.Control 
                                                type="file" 
                                                name="attach"
                                                placeholder="input your transfer proof"
                                                onChange={this.handleChange}
                                            />
                                        </Form.Group>
                                        <Button className="text-white" block style={{ background: "#F58033", borderColor: "#F58033"}} type="submit" >Send</Button>
                                    </Form>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
                </>
        )
        
    }
}


const mapStateToProps = (state) => {
    return {
        transaction: state.transaction
    };
};

export default connect(mapStateToProps, { postTransaction })(TransactionUser);

