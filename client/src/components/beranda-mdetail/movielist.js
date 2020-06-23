import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Movies from './movies/movies_';
import MoviesExtras from './movies/moviesExtra';
import Tv from './tv/tv_';
import TvExtra from './tv/tvExtra';


class MovieList extends Component {
    render(){
        let { ids, homi } = this.props;
        
    
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
                <div className="text-light" id="tv-show" style={display.tv}>TV Series</div>
                <Row style={display.tv}>
                    {
                        Tv.map( tvv => {
                            return <Col xs={5} md={3} lg={2} className="m-3 " key={tvv.id}>
                                        <a href={"/detail/"+ tvv.id} ><Image src={tvv.image} style={setGambar} key={tvv.id}/></a>
                                        <div className="pt-1">
                                        <p  className="text-white text-font-weight-bold">{tvv.name}</p>
                                        <p className="text-muted text-font-weight-light">{tvv.year}</p>
                                        </div>
                                    </Col>
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
                <div className="text-light" id="movies" style={display.movies}>Movies</div>
                <Row style={display.movies}>
                    {
                        Movies.map( movie => {
                            return <Col xs={5} md={3} lg={2} className="m-3" key={movie.id}>
                                        <Image src={movie.image} style={setGambar} key={movie.id}/>
                                        <div className="pt-1">
                                        <p  className="text-white text-font-weight-bold">{movie.name}</p>
                                        <p className="text-muted text-font-weight-light">{movie.year}</p>
                                        </div>
                                    </Col>
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
    width: '200px',
    height: '300px',
    border: '2px solid white'
} 

const divPembungkus = {
    backgroundColor: 'black',
    marginTop: -35,
    boxShadow: '-6px -42px 69px -8px rgba(0,0,0,0.75)',
    paddingBottom: 20
}

export default MovieList;
