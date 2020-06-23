import React, { Component } from 'react';
import { Container, Image, Row, Col, Button , Carousel} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './beranda-mdetail.css';

// import theWitcherBanner from './data/main_banner.png';
// import theJoker from './data/TV.png';
// import theLacasa from './data/lacasa_banner.png';

// import theWitcherTitle from './data/thw.png';
// import theJokerTitle from './data/joker.png';
// import theLacasaTitle from './data/lacasa.png';

import TV from './data/data';
import MOVIES from './data/dataMovies';
import MOVIES_EPISODE from './data/dataMoviesEpisode';
import MOVIES_EPISODE2 from './data/dataMoviesEpisode2';




class Banner extends Component {

    constructor(props){
        super(props);
        this.state = {
            onKlik: false
        }
    }

    onTest(){
        this.setState({onKlik: !this.state.onKlik});
    }



    render(){

        let { ids, genres, statusX } = this.props;

        let TT = genres === 'Tv Series' ? TV : MOVIES;
        let TT_E = genres === 'Tv Series' ? MOVIES_EPISODE :  MOVIES_EPISODE2;
        let STATUS = statusX === 'admin' ? true : false;

        return (
        <div style={{background: 'black'}}>
            <a href="#playing" onClick={() => this.onTest()}><div style={{background: 'rgba(31, 31, 31, 0.3)', zIndex: 999, height: 540, width: '1680px', position: 'absolute' }}></div></a>
            <Container style={{height: 570}} className="py-3">
                <Row>
                    <Col xs={12} md={12}>
                        <ReactPlayer url={TT[ids].video} playing={this.state.onKlik}  width='100%' height='500px'/>
                    </Col>
                </Row>
            </Container>

            <div className="tes" style={{backgroundColor: 'black', marginTop: '-34px'}}>
            <Container className="pb-5 pt-5">
                { STATUS ? (<div className="text-white pb-4 text-right"> 
                    <Button style={{background: '#E50914', width: 200 }} 
                        className="btn-outline-danger text-white" 
                        href={"/add_episode/" + ids + "/" + genres + "/" + statusX} >Add Episode
                    </Button>
                </div> ) : 
                (<div></div>) }
                <Row>
                    <Col xs={6} md={7}>
                        <Row>
                            <Col xs={12} md={4}>
                                <Image src={TT[ids].image} />
                            </Col>
                            <Col xs={12} md={8}>
                                <h1 className='text-white'>{TT[ids].title}</h1>
                                <div className='pb-3 text-secondary'>
                                    <span className='pr-3'>{TT[ids].year}</span><span className="btn btn-outline-secondary" style={{width: 95}}> {TT[ids].genre}</span>
                                </div>
                                <h6 className="text-justify text-white font-weight-light" >{TT[ids].deskripsi}</h6>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={6} md={5} >
                        <div style={{border: '1px solid red', height: '250px'}}>
                        
                        {   
                            STATUS ? (
                            

                                <div style={{height: '100%'}}>
                                    <Carousel indicators={false} interval={999999999} style={{height: '100%'}}>
                                        <Carousel.Item style={{height: '100%'}}>
                                            <ReactPlayer url={TT_E[ids].video} playing={false} width='100%' height='100%'  controls={true}/>
                                        </Carousel.Item >
                                        <Carousel.Item style={{height: '100%'}}>
                                            <ReactPlayer url={TT_E[ids].video} playing={false} width='100%' height='100%'  controls={true}/>
                                        </Carousel.Item>
                                        <Carousel.Item style={{height: '100%'}}>
                                            <ReactPlayer url={TT_E[ids].video} playing={false} width='100%' height='100%'  controls={true}/>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            
                            ):
                            ( <ReactPlayer url={TT[ids].video} playing={false} width='100%' height='100%'  controls={true}/> )
                        }


                        <p className="text-white pt-4">{TT[ids].title} : {TT[ids].genre}</p>

                        </div>
                    </Col>
                </Row>
            </Container>
                
            </div>
        </div>
        );
    }
}


export default Banner;
