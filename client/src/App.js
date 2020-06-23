import React, { Component } from 'react';
import Jumbotron from './components/beranda/jumbotron';
import MusicList from './components/beranda/musiclist';


class App extends Component {
  render(){
    return (
      <div>
      
      {
          <Jumbotron ids={1} />
      }
      {
          <MusicList ids={1} homi={"homes"} />
      }
      


      </div>
    );
  }
}

export default App;
