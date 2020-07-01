import React, { Component } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import Header from './beranda-pages-header';
import { connect } from "react-redux";
import { addArtist } from "../redux/actions/artists";


class ArtistAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            };
        }

        handleChange = (event) => {
            const { data } = this.state;
            // console.log(event.target.name)
            this.setState({
            data: { ...data, [event.target.name]: event.target.value },
            });
        };
        
        handleSubmit = async (event) => {
            event.preventDefault();
            console.log(this.state.data)
            this.props.addArtist(this.state.data);
            this.setState({ data: {} });
        };

    render(){
        const { data } = this.state;
        const { data: addArtist } = this.props.artist;
        let msg = false;
        if (!(Object.keys(addArtist).length === 0 && addArtist.constructor === Object)){
            console.log(addArtist);
            msg = true;
        }
        return(
            <>
                <Header />
                <div className="bg-dark" style={{height: "100vh", width: "100%"}}>
                    <div style={{height: 80, background: "#1F1F1F"}}></div>
                    <Container className="text-white  " style={{width: 900, marginTop: 40, fontSize: 24, fontWeight: 500  }}>Add Artist</Container>
                    <Container className="rounded" style={{background: "#1F1F1F", marginTop: 35, paddingBottom: 20, width: 900}}>
                        { msg && (<p style={{background: "#1F1F1F", color: 'green'}}>Successfully added</p>) }
                        <Row className="py-3 pt-5">
                            <Col xs={0} md={3} lg={1}></Col>
                            <Col xs={12} md={3} lg={10}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control 
                                            type="text"
                                            name="name" 
                                            placeholder="Name"
                                            value={data.name ? data.name : ""}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput2">
                                        <Form.Control 
                                            type="number" 
                                            placeholder="Old" 
                                            name="old" 
                                            value={data.old ? data.old : ""}
                                            onChange={this.handleChange}
                                            />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select" 
                                            name="type"
                                            onChange={this.handleChange}
                                        >
                                            <option>Type</option>
                                            <option>RnB</option>
                                            <option>Pop</option>
                                            <option>Rock</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput3">
                                        <Form.Control 
                                            type="number" 
                                            placeholder="Start Career" 
                                            name="startCareer"
                                            value={data.startCareer ? data.startCareer : ""}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                    <div  className="text-center">
                                        <Button type="submit" style={{width: 200, background: "#F58033", borderColor: "#F58033"}}>
                                            Add Artist 
                                        </Button>
                                    </div>
                                </Form>
                            </Col>
                            <Col xs={0} md={3} lg={1}></Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        artist: state.artist
    };
};

export default connect(mapStateToProps, { addArtist })(ArtistAdd);

