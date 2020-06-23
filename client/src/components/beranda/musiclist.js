import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import ReactJkMusicPlayer from "react-jinke-music-player";
// import "react-jinke-music-player/assets/index.css";
// import { Link } from "react-router-dom";

// import Movies from './movies/movies_';
import MoviesExtras from './movies/moviesExtra';
// import Tv from './tv/tv_';
import TvExtra from './tv/tvExtra';

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

        let { ids, homi } = this.props;

        let status = localStorage.getItem('token');
    
        if( homi === "homes" ){
            this.displayTv = "flex";
            this.displayMovies = "flex";
            this.displayTvExtras = "none";
            this.displayMovieExtras = "none";
        }else if ( homi !== "homes" && ids === 2  ){
            this.displayTv = "flex";
            this.displayMovies = "none";
            this.displayTvExtras = "flex";
            this.displayMovieExtras = "none";
        }else{
            this.displayTv = "none";
            this.displayMovies = "flex";
            this.displayMovieExtras = "flex";
            this.displayTvExtras = "none";
        }

        const display = {
            tv:{
                display: `${this.displayTv}`
            },
            movies:{
                display: `${this.displayMovies}`
            },
            tvExtras:{
                display: `${this.displayTvExtras}`
            },
            moviesExtras:{
                display: `${this.displayMovieExtras}`
            }
        }

        return (
        <div style={divPembungkus}>
            
            <Container className="pt-3">
                
                <div className="text-center my-5">
                    <p style={{color: "#EE4622", fontSize: 24, fontWeight: 20}}>Dengarkan Dan Rasakan    </p>
                </div>
                <div className="text-light" id="tv-show" style={display.tv}></div>
                <Row style={display.tv}>
                    
                    {   
                        musicX.map( x => {
                            return (
                                
                                        <Col xs={5} md={2} lg={2} className="" key={x.id} >
                                            <div style={{background: "#3A3A3A"}} className="rounded text-center pt-2 px-2"> 
                                                    <Image src={`http://localhost:5000/public/${x.thumbnail}`} style={setGambar} key={x.id} />
                                                <div className="pt-1">
                                                    <div className="d-inline-flex">
                                                        <p className="text-white text-font-weight-bold text-left" style={{overflow: "hidden", width: 111, fontSize: 14}}>{x.title}</p>
                                                        <p className="text-white text-font-weight-light text-right" style={{fontSize: 14}}>{x.year}</p>
                                                    </div>
                                                    <p className="text-font-weight-light text-left pb-2 text-white" style={{fontSize: 14}} >{x.Artist.name}</p>
                                                </div>
                                            </div>
                                        </Col>
                            
                                    )
                        })
                    }
                </Row>

                <Row style={display.tvExtras}>
                    {
                        TvExtra.map( tvvv => {
                            return <Col xs={5} md={3} lg={2} className="m-3 " key={tvvv.id}>
                                        <Image src={tvvv.image} style={setGambar} key={tvvv.id}/>
                                        <div className="pt-1">
                                        <p  className="text-white text-font-weight-bold">{tvvv.name}</p>
                                        <p className="text-muted text-font-weight-light">{tvvv.year}</p>
                                        </div>
                                    </Col>
                        })
                    }
                </Row>

                <hr className="bg-white" />
                <div className="text-light" id="movies" style={display.movies}></div>
                <Row style={display.movies}>
                {   
                        musicX.map( x => {
                            return (
                            
                                <Col xs={5} md={2} lg={2} className="" key={x.id} >
                                    <div style={{background: "#3A3A3A"}} className="rounded text-center pt-2 px-2"> 
                                        <a href={"/detail/"+ x.id + "/" + x.Artist.type + "/" + status} >
                                            <Image src={`http://localhost:5000/public/${x.thumbnail}`} style={setGambar} key={x.id} />
                                        </a>  
                                        <div className="pt-1">
                                            <div className="d-inline-flex">
                                                <p className="text-white text-font-weight-bold text-left" style={{overflow: "hidden", width: 111, fontSize: 14}}>{x.title}</p>
                                                <p className="text-white text-font-weight-light text-right" style={{fontSize: 14}}>{x.year}</p>
                                            </div>
                                            <p className="text-font-weight-light text-left pb-2 text-white" style={{fontSize: 14}} >{x.Artist.name}</p>
                                        </div>
                                    </div>
                                </Col>
                    
                            )
                        })
                    }
                </Row>

                <Row style={display.moviesExtras}>
                    {
                        MoviesExtras.map( movieExtra => {
                            return <Col xs={5} md={3} lg={2} className="m-3" key={movieExtra.id}>
                                        <Image src={movieExtra.image} style={setGambar} key={movieExtra.id}/>
                                        <div className="pt-1">
                                        <p  className="text-white text-font-weight-bold">{movieExtra.name}</p>
                                        <p className="text-muted text-font-weight-light">{movieExtra.year}</p>
                                        </div>
                                    </Col>
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
    heiight: '130px'
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

