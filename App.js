
    import React from 'react';
    import {HashRouter , Route} from 'react-router-dom';


    
 //import function Name './filename';
 import CityList from './city.js';
 import UserList from './user.js';
 import ProductList from './product.js';
 import BookList from './book.js';
 import Mycustomer from './customer.js';
 import TopHeader from './header.js';


 import MyStateOne from './mystate/state1.js';
 import MyStateTwo from './mystate/state2.js';
 
 import MyStateThree from './mystate/state3.js';
 import MyStateFour from './mystate/state4.js';
 import StateFive from './mystate/state5.js';
 import StateSix from './mystate/state6.js';
 import MyProps from './property.js';
 import StateSeven from './mystate/state7.js';
 import HookFour from './hooks/hook4.js';
 import HookFive from './hooks/hook5.js';
 import TaskOne from './hooks/task1.js';
 

 
 
 
 
 


function App() {
  return (

    <HashRouter>
      <TopHeader/>
      <Route exact path="/" component={CityList}/>
      <Route exact path="/user-list" component={UserList}/>
      <Route exact path="/product-list" component={ProductList}/>
      <Route exact path="/book-list" component={BookList}/>
      <Route exact path="/allcustomer" component={Mycustomer}/>
      <Route exact path="/state1" component={MyStateOne}/>
      <Route exact path="/state2" component={MyStateTwo}/>
     
      <Route exact path="/state3" component={MyStateThree}/>
      <Route exact path="/state4" component={MyStateFour}/>
      <Route exact path="/state5" component={StateFive}/>
      <Route exact path="/state6" component={StateSix}/>
      <Route exact path="/property" component={MyProps}/>
      <Route exact path="/state7" component={StateSeven}/>
      <Route exact path="/hook4" component={HookFour}/>
      <Route exact path="/hook5" component={HookFive}/>
      <Route exact path="/task1" component={TaskOne}/>
     
     
      
    </HashRouter>
   
  );
}

export default App;
