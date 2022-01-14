
import React from 'react';
import {Link} from 'react-router-dom';


function TopHeader(){

    return(
         <ul className="topnav">
             <li><Link className="text-white" to="/">List</Link></li>
             <li><Link className="text-white" to="/book-list">Book</Link></li>
             <li><Link className="text-white" to="/product-list">Product</Link></li>
             <li><Link className="text-white" to="/user-list">User</Link></li>
             <li><Link className="text-white" to="/allcustomer">Customers</Link></li>
             <li><Link className="text-white" to="/state1">State-One</Link></li>
             <li><Link className="text-white" to="/state2">State-Two</Link></li>
             
             <li><Link className="text-white" to="/state3">State-Three</Link></li>
             <li><Link className="text-white" to="/state4">State-Four</Link></li>
             <li><Link className="text-white" to="/state5">State-Five</Link></li>
             <li><Link className="text-white" to="/state6">State-Six</Link></li>
             <li><Link className="text-white" to="/property">My Property</Link></li>
             <li><Link className="text-white" to="/state7">State-Seven</Link></li>
          
             <li><Link className="text-white" to="/task1">Task-1</Link></li>
           
           
             
         </ul>

    )
}
export default TopHeader;


/*
      <Route exact path="/" component={CityList}/>
      <Route exact path="/user-list" component={UserList}/>
      <Route exact path="/product-list" component={ProductList}/>
      <Route exact path="/book-list" component={BookList}/>
      <Route exact path="/allcustomer" component={Mycustomer}/>

 */     