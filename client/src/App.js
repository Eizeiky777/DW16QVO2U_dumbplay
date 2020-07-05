import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import Jumbotron from './components/beranda/jumbotron';
import MusicList from './components/beranda-musics/musicList';
import MusicListGuest from './components/beranda/musiclist';
import MusicPlayer from './components/beranda-musics/musicPlayer';

import { connect } from "react-redux";
import { getMusics } from "./components/redux/actions/musics";
import { getLoginDetail } from "./components/redux/actions/loginDetail";


const ModalSub = ({ onHide, show }) => {

  return (
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
    >

        <Modal.Body className="bg-dark py-4">
            <h5 className="bg-dark d-flex justify-content-center " style={{color: 'orange'}}>Please wait until admin confirm your payment</h5>
        </Modal.Body>
        
    </Modal>
  );
}

class App extends Component {

  constructor(){
    super()
    this.state = {
        playIndex: 0,
        modalSubscribe: false
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
    let { modalSubscribe } = this.state;
    let { open, login, subscribe } = this.props;
    const { data: listMusic } = this.props.music;
    const { data: detailLogger } = this.props.loginDetail;
  
    const logger = Object.values(detailLogger);
    //console.log(logger);

    if (logger[7] === true) open = true;

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
          (<MusicListGuest login={login} subscribes={() => this.setState({modalSubscribe:true})} opens={subscribe} />)
      }

          <ModalSub
              show={modalSubscribe}
              onHide={() => this.setState({modalSubscribe: false})}
          />

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

export default connect(mapStateToProps, { getMusics, getLoginDetail })(App);


// note
// pay ,  getAudioInstance, onPlayHandler, onPauseHandler, 