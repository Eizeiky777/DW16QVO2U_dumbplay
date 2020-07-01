    import React, { Component } from 'react';
    import Jumbotron from './components/beranda/jumbotron';
    import MusicList from './components/beranda-musics/musicList';
    import MusicListGuest from './components/beranda/musiclist';
    import MusicPlayer from './components/beranda-musics/musicPlayer';

    import { connect } from "react-redux";
    import { getMusics } from "./components/redux/actions/musics";
    import { getLoginDetail } from "./components/redux/actions/loginDetail";

    class Home extends Component {

    constructor(){
        super()
        this.state = {
            playIndex: 0
        }
        this.audioInstance = null
        this.play = true
    }

    setPlayIndex = (e) => {
        this.setState({playIndex: e})
    }

    getAudioInstance = (instance) => {
        //console.log("Getting audio instance", instance);
        this.audioInstance = instance;
    };

    onPlayHandler = () => this.play = true;
    onPauseHandler = () => this.play = false;

    componentDidMount(){
        this.props.getMusics()
        this.props.getLoginDetail()
        //console.log("Updated audio instance", this.audioInstance);
    }

    render(){
        // const { data: dataUser, loading, error } = this.props.auth;
        let { open } = this.props;
        console.log(open, 'i am at home')
        const { data: listMusic } = this.props.music;
        const { data: dataLogger } = this.props.loginDetail;
        if (!(Object.keys(dataLogger).length === 0 && dataLogger.constructor === Object)){
            // console.log(dataLogger)
        }

        // const statusLogger = Object.values(dataLogger);
        // let open = statusLogger[3] === 'admin'  ? true : false;

        if ( localStorage.getItem('role') !== 'admin'){
            open = false;
            console.log(open, 'sorry u can\'t acces our service')
        }else if( localStorage.getItem('role') === 'admin'){
        open = true;
        console.log(open, 'okay u are allowed')
        }


        return (
        <div>
        
        {
            <Jumbotron ids={1} />
        }
        {
            open ? 
            ( <>
                <MusicList music={listMusic} 
                    setPlayIndex={this.setPlayIndex} 
                    playIndex={this.state.playIndex} 
                    audioInstance={this.audioInstance} 
                    play={this.play}
                />

                <MusicPlayer 
                    music={listMusic} 
                    setPlayIndex={this.setPlayIndex} 
                    playIndex={this.state.playIndex} 
                    getAudioInstance={this.getAudioInstance}
                    onPlayHandler={this.onPlayHandler}
                    onPauseHandler={this.onPauseHandler}
                />
                </>
            ) : 
            (<MusicListGuest ids={1} homi={"homes"} />   )
        }

        </div>
        );
    }
    }


    const mapStateToProps = (state) => {
    return {
        music: state.music,
        loginDetail: state.loginDetail
    };
    };

    export default connect(mapStateToProps, { getMusics, getLoginDetail })(Home);


    // note
    // pay ,  getAudioInstance, onPlayHandler, onPauseHandler, 