import React , { Component }from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";
import AppNavbar from './components/layout/AppNavbar/AppNavbar';
import Home from './components/layout/Home/Home';
import Services from './components/services/Services/Services';
import ServicePage from './components/services/ServicePage/ServicePage';
import LogIn from './components/clients/LogIn/LogIn';
import SignUp from './components/clients/SignUp/SignUp';
import About from './components/layout/About/About'
import Footer from './components/layout/Footer/Footer';
import Account from './components/clients/Account/Account'

import { Provider } from 'react-redux';

import store from './store';
// import {
//   ReactReduxFirebaseProvider,
//   firebaseReducer
// } from 'react-redux-firebase'


import './App.css';

class App extends Component  {
  state = {
    isAuthenticated: false
  };
  updateData = (value, email) => {
    // const history = useHistory();
    // const history  = createBrowserHistory();
    // history.push('/')
    // window.location.href = '/'; 
    // history.pushState('/')
    this.setState({ isAuthenticated: value, username: email });
    // 
  }
  render() {
  const {isAuthenticated} = this.state
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavbar auth={isAuthenticated} updateData={this.updateData} />
          {/* <div className=""> */}
            <Switch>
            <Route exact  path="/"> <Home auth={isAuthenticated}/> </Route>
            <Route exact path="/services" component={ Services } />
            <Route exact path='/services/:name' render = {()=> <ServicePage auth={isAuthenticated}/> } />
            {/* <Route exact path="/services/:name" component={ withRouter(ServicePage) } /> */}
            <Route render = {()=> <LogIn updateData={this.updateData} auth={isAuthenticated} /> } exact path="/login" />
            <Route exact path="/about" component={ About } />
            <Route exact path="/signup" component={ SignUp } />
            <Route render = {()=> <Account auth={isAuthenticated}/> } exact path="/account" />
            {/* <Route exact path="/account" component={ Account } /> */}
            </Switch>
          {/* </div> */}
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}
}

export default App;