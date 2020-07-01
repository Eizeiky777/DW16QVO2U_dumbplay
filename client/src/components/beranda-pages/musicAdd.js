import React, { Component } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import Header from './beranda-pages-header';
import { connect } from "react-redux";
import { addMusics } from "../redux/actions/musics";


class MusicAdd extends Component {

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
            data: { ...data, [event.target.name]: event.target.type === 'file' ? event.target.files[0] : event.target.value },
            });
        };
        
        handleSubmit = async (event) => {
            event.preventDefault();
            //console.log(this.state.data)
            this.props.addMusics(this.state.data);
            this.setState({ data: {} });
        };

    render(){
        const { data } = this.state;

        const { data: addMusic } = this.props.music;
        if (!(Object.keys(addMusic).length === 0 && addMusic.constructor === Object)){
            console.log(addMusic);
        }

        return(
            <>
                <Header />
                <div className="bg-dark" style={{height: "100vh", width: "100%"}}>
                    <div style={{height: 80, background: "#1F1F1F"}}></div>
                    <Container className="text-white  " style={{width: 900, marginTop: 40, fontSize: 24, fontWeight: 500  }}>Add Music</Container>
                    <Container className="rounded" style={{background: "#1F1F1F", marginTop: 35, paddingBottom: 20, width: 900}}>
                        <Row className="py-3 pt-5">
                            <Col xs={0} md={3} lg={1}></Col>
                            <Col xs={12} md={3} lg={10}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="exampleForm.ControlInput11" className="d-inline-flex">
                                        <Form.Control
                                            style={{width: 680, marginRight: 5}}
                                            type="text"
                                            name="title" 
                                            placeholder="Title"
                                            value={data.title ? data.title : ""}
                                            onChange={this.handleChange}
                                        />
                                        <Form.Control
                                            style={{width: "17%"}}
                                            type="text"
                                            placeholder="Thumbnail"
                                        />
                                        <Form.Control
                                            style={{paddingTop: 5, width: "15%", right: 13, position: "absolute", zIndex: 999, opacity: 0}}
                                            type="file" 
                                            name="thumbnail"
                                            placeholder="Attach Thumbnail"
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput2">
                                        <Form.Control 
                                            type="number" 
                                            placeholder="Year" 
                                            name="year" 
                                            value={data.year ? data.year : ""}
                                            onChange={this.handleChange}
                                            />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select" 
                                            name="artistId"
                                            onChange={this.handleChange}
                                        >
                                            <option>Singer</option>
                                            <option value="1">Henry</option>
                                            <option value="2">Yiruma</option>
                                            <option value="3">Aimer</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput3">
                                        <Form.Control
                                            style={{width: "17%"}}
                                            type="text" 
                                            name="attach"
                                            placeholder="Attach Sound"
                                            value={data.attach ? data.attach : ""}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                    <div  className="text-center">
                                        <Button type="submit" style={{width: 300, background: "#F58033", borderColor: "#F58033"}}>
                                            Add Music
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
        music: state.music
    };
};

export default connect(mapStateToProps, { addMusics })(MusicAdd);

