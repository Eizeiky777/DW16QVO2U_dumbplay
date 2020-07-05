import React, { Component } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import { connect } from "react-redux";
import { getMusics } from "../redux/actions/musics";


class MusicList extends Component {

    componentDidMount(){
        this.props.getMusics();
    }

    render(){
        const { data: dataMusic } = this.props.music;
        // console.log(dataMusic);
        const musicX = Object.values(dataMusic);

        let subscribePending = this.props.opens.length === 0 ? false : true;
        //console.log(this.props.opens)
        subscribePending  =  localStorage.getItem('role') === null ? false : true;

        return (
            <div style={divPembungkus}>
                
                <Container className="pt-3">
                    <div className="text-center my-5">
                        <p style={{color: "#EE4622", fontSize: 24, fontWeight: 20}}>Dengarkan Dan Rasakan    </p>
                    </div>
                    <div className="text-light" id="tv-show"></div>
                    <Row>
                        
                        {   
                            musicX.slice(-6).map( x => {
                                return (
                                    
                                            <Col xs={5} md={2} lg={2} className="" key={x.id} >
                                                <div style={{background: "#3A3A3A", height: 240, width: 175, marginTop: 15}} className="rounded text-center pt-2 px-2"> 
                                                        {   
                                                            subscribePending ?
                                                            (<Button onClick={this.props.subscribes} style={{background: "#3A3A3A", borderColor: '#3A3A3A', paddingRight: '10'}}>
                                                                <Image src={`http://localhost:5000/public/${x.thumbnail}`} style={setGambar} key={x.id} />
                                                            </Button>):
                                                            (<Button onClick={this.props.login} style={{background: "#3A3A3A", borderColor: '#3A3A3A', paddingRight: '10'}}>
                                                                <Image src={`http://localhost:5000/public/${x.thumbnail}`} style={setGambar} key={x.id} />
                                                            </Button>)
                                                        }
                                                    <div className="pt-1">
                                                        <div className="d-inline-flex">
                                                            <p className="text-white text-font-weight-bold text-left" style={{overflow: "hidden", width: 111, fontSize: 14}}>
                                                                {x.title.substring(0,14)}
                                                            </p>
                                                            <p className="text-white text-font-weight-light text-right" style={{fontSize: 14}}>{x.year}</p>
                                                        </div>
                                                        <p className="text-font-weight-light text-left pb-2 pl-2 text-white" style={{fontSize: 14}} >{x.Artist.name}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                
                                        )
                            })
                        }
                    </Row>

                    <Row>
                    {   
                            musicX.slice(-6).map( x => {
                                return (
                                
                                    <Col xs={5} md={2} lg={2} className="" key={x.id} >
                                        <div style={{background: "#3A3A3A", height: 220, width: 175, marginTop: 15}} className="rounded text-center pt-2 px-2"> 
                                                <Image src={`http://localhost:5000/public/${x.thumbnail}`} style={setGambar} key={x.id} />
                                            <div className="pt-1">
                                                <div className="d-inline-flex">
                                                    <p className="text-white text-font-weight-bold text-left" style={{overflow: "hidden", width: 111, fontSize: 14}}>
                                                        {x.title.substring(0,14)}
                                                    </p>
                                                    <p className="text-white text-font-weight-light text-right" style={{fontSize: 14}}>{x.year}</p>
                                                </div>
                                                <p className="text-font-weight-light text-left pb-2 pl-2 text-white" style={{fontSize: 14}} >{x.Artist.name}</p>
                                            </div>
                                        </div>
                                    </Col>
                        
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
        );
    }
}


const setGambar = {
    border: '2px solid white',
    width: '130px',
    height: '130px'
} 

const divPembungkus = {
    backgroundColor: 'black',
    marginTop: -35,
    boxShadow: '-6px -42px 69px -8px rgba(0,0,0,0.75)',
    paddingBottom: 20,

}

const mapStateToProps = (state) => {
    return {
        music: state.music
    };
};

export default connect(mapStateToProps, { getMusics })(MusicList);

