import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import App from './App';
import Header from './components/beranda/header';
import ArtistAdd from './components/beranda-pages/artistAdd';
import ListTransactions from './components/beranda-pages/transactionsList';
import transactionUser from './components/beranda-pages/transactionUser';
import MusicAdd from './components/beranda-pages/musicAdd';
import PrivateRoute from "./components/private/privateRoute";

//Redux
import { Provider } from 'react-redux';
import store from './components/redux/store';
import * as serviceWorker from './serviceWorker';

class Final extends Component {

    constructor(){
      super()
      this.state = {
          unlock: localStorage.getItem('role') === 'admin' ? true : false,
          unlockUser: localStorage.getItem('role') === 'user' ? true : false,
          open: false,
      }
  }

    setOpen = () => {
      // console.log('passed the index street')
      this.setState({open: true})
    }

    render(){  
        
      return(
        <>
        <Provider store={store}>
          <div>
              <Router>
                {/* <Header setOpen={this.setOpen}  /> */}
                <Switch>
                    {/* {
                      logs ? (<Route path="/" component={Logged}/>) : ( <Route exact path="/" render={(props) => <App {...props} isAuthed={true} handle={handleLogin}  />} /> )
                    } */}
                    {/* <Route exact path="/" render={(props) => <App {...props} open={this.state.open}/>} /> */}
                    <Route exact path="/" render={(props) => <Header {...props} setOpen={this.setOpen}/>} />
                    <PrivateRoute
                      path="/add_artist"
                      component={ArtistAdd}
                      isLogin={this.state.unlock}
                    />
                    <PrivateRoute
                      path="/transactions"
                      component={ListTransactions}
                      isLogin={this.state.unlock}
                    />
                    <PrivateRoute
                      path="/transaction_user"
                      component={transactionUser}
                      isLogin={this.state.unlockUser}
                    />
                    <PrivateRoute
                      path="/add_music"
                      component={MusicAdd}
                      isLogin={this.state.unlock}
                    />
                  
              </Switch>
            </Router>
          </div>
        </Provider>
        </>
      )
    }
}


ReactDOM.render(
  <>
    <Final />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
