import React, { Fragment } from 'react';
import { Route, Switch,HashRouter as Router} from 'react-router-dom';
import Register from './register/register';
import Footer from './footer/footer';
import App from './App';
import Login from './register/login';
import Profile from './profile/profile';
import Navbar from './footer/navbar';
import Profile2 from './profile/profile2';
import Matrimonial from './profile/matrimonials';
import Search from './profile/search'

class Routing extends React.Component{

render() {
  return(
    <React.Fragment>
      <Router>
      <Navbar></Navbar>
    <Switch>
    <Route exact path ='/' component={App}></Route>
    <Route exact path='/register' component={Login}></Route>
    <Route exact path='/profile' component={Profile}></Route>
    <Route exact path='/profile2' component={Profile2}></Route>
    <Route exact path='/matrimonial' component={Matrimonial}></Route>
    <Route exact path='/search' component={Search}></Route>

    </Switch>
    <Footer></Footer>
    </Router>
    </React.Fragment>
);
}
}


export default Routing;




