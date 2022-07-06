import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Details from './component/Details';
import Home from './component/home';
import CardPlus from './component/CardPlus';
import Store from './Server/Store';
import "./App.css";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
class App extends Component {
  render()
  {
    return (
      <Provider store={Store}>

        <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" exact><Home/></Route>
          <Route path="/details/:id" ><Details/></Route>
          <Route path="/cardplus" ><CardPlus/></Route>

        </Switch>
        <Footer/>
        </BrowserRouter>
        
      </Provider>
      
  
  );
}
}

export default App;
