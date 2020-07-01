import React, { Component } from 'react';
import Jumbotron from './components/beranda/jumbotron';
import MusicList from './components/beranda-musics/musicList';
import MusicListGuest from './components/beranda/musiclist';
import MusicPlayer from './components/beranda-musics/musicPlayer';

import { connect } from "react-redux";
import { getMusics } from "./components/redux/actions/musics";
// import { getLoginDetail } from "./components/redux/actions/loginDetail";

class App extends Component {

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
    // this.props.getLoginDetail()
    //console.log("Updated audio instance", this.audioInstance);
  }

  render(){
    let { open, login } = this.props;
    const { data: listMusic } = this.props.music;

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
          (<MusicListGuest login={login} />   )
      }

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      music: state.music
  };
};

export default connect(mapStateToProps, { getMusics })(App);


// note
// pay ,  getAudioInstance, onPlayHandler, onPauseHandler, 