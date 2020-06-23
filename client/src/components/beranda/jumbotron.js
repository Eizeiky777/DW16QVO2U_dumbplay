import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

import theWitcherBanner from './data/main_banner.png';
import theJoker from './data/jumbosound.png';
import theLacasa from './data/lacasa_banner.png';

import theWitcherTitle from './data/thw.png';
import theJokerTitle from './data/joker.png';
import theLacasaTitle from './data/lacasa.png';




class Banner extends Component {


    render(){

        let { ids } = this.props;
        
        if ( ids === 1 ){
            this.widthX = "60vh";
        }else{
            this.widthX = "90vh";
        }

        
        const divStyle = {
            backgroundImage: `url(${GAMBAR_COVER[ids].image})`,
            backgroundSize: 'cover',
            width: "100%",
            height: "600px",
            boxShadow: 'inset 0px -110px 20px rgba(0,0,0,0.5), 0 20px 52px #000',
            backgroundColor: 'black'
        };

        // const titleMain = {
        //     width: `${this.widthX}`
        // };

        return (
        <div>
            <Jumbotron style={divStyle}>
                <Container className="pt-4" >
                    <div style={textWitcher} className="text-center pt-5">
                        <p style={{fontSize: 48}} className="mt-4">
                            { JUDUL[ids].text }
                        </p>
                        <p className="d-inline-flex pr-3" style={{fontSize: 24}}> {JUDUL[ids].year} </p>
                    </div>
                </Container>
            </Jumbotron>

        </div>
        );
    }
}

const JUDUL = [{
    id: 1,
    image: theWitcherTitle,
    text: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beast',
    genre: 'Tv Series',
    year: '2019'
    },{
    id: 2,
    image: theJokerTitle,
    text: 'Connect on Dumbsound ',
    genre: 'Discovery, Stream, and share a constantly expanding mix of music from emerging and major artists around the world',
    year: 'Discovery, Stream, and share a constantly expanding mix of music from emerging and major artists around the world' 
    },{
    id: 3,
    image: theLacasaTitle,
    text: 'Money Heist is a crime drama on Netflix - originally called La Casa de Papel. Money Heist season 3 just been released by the streaming service the plot reads: "Eight thieves take hostages and lock themselves in the royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan',
    genre: 'Tv Series',
    year: '2017' 
    }
];


const GAMBAR_COVER = [{
    id: 1,
    image: theWitcherBanner
    },{
    id: 2,
    image: theJoker
    },{
    id: 3,
    image: theLacasa 
    }
];

const textWitcher = {
    color: "white",
    textShadow: "2px 2px 2px #000",
    marginTop: "15px",
    marginBottom: "15px"
};

// const buttonWatch = {
//     width: '200px',
//     background: '#E50914',
//     borderRadius: '5px',
    
// };

export default Banner;
