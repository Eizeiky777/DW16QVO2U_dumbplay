import React, { Component } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
//import ReactJkMusicPlayer from 'react-jinke-music-player';
// import playIcon from './img/play.png';
// import './musicList.css';

class MusicList extends Component {


    render(){
        const musicas = Object.values(this.props.music);

        return (
            <div className="" style={containMusic}>
                <Container className="pt-3">
                    <div className="text-center my-5">
                        <p style={{color: "#EE4622", fontSize: 24, fontWeight: 20}}> Dengarkan Dan Rasakan </p>
                    </div>
                    <div className="text-light" id="genre-music"></div>
                    <Row>
                        {   
                            musicas.map( (x, index) => {
                                return (
                                            <Col xs={5} md={2} lg={2} className="" key={index} >
                                                {/* <div className={`playIcon${index === this.props.playIndex ? ' current' : ' '}`}>
                                                    <img src={playIcon} alt="playIcon" onClick={() => this.props.setPlayIndex(index)} />
                                                </div> */}
                                                <div style={{background: "#3A3A3A", height: 220, width: 175, marginTop: 15}} className="rounded text-center pt-2 px-2"> 
                                                    <Button style={{background: "#3A3A3A", borderColor: '#3A3A3A', paddingRight: '10'}}>
                                                        <Image src={`http://localhost:5000/public/${x.thumbnail}`} style={setGambar} 
                                                        onClick={() => {
                                                            this.props.setPlayIndex(index)
                                                            if (this.props.audioInstance) this.props.play ? this.props.audioInstance.pause() : this.props.audioInstance.play();
                                                        }}  
                                                        /> 
                                                    </Button>
                                                    <div className="pt-1">
                                                        <div className="d-inline-flex">
                                                            <p className="text-white text-font-weight-bold text-left" style={{overflow: "hidden", width: 111, fontSize: 14}}>
                                                                {x.title.substring(0,14)}
                                                            </p>
                                                            <p className="text-white text-font-weight-light text-right" style={{fontSize: 14}}>
                                                                {x.year}
                                                            </p>
                                                        </div>
                                                        <p className="text-font-weight-light text-left pb-2 pl-2 text-white" style={{fontSize: 14}} >{x.Artist.name}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                            })
                        }
                    </Row>
                    {/* <hr className="bg-white" /> */}
                </Container>
            </div>
        );
    }
}

const containMusic = {
    height: "100%",
    width: "100%",
    marginTop: "-33px", 
    background: "black", 
    boxShadow: "-6px -42px 69px -8px rgba(0,0,0,0.75)",
    paddingBottom: 50,
}

const setGambar = {
    border: '2px solid white',
    width: '130px',
    height: '130px'
} 


export default MusicList;
