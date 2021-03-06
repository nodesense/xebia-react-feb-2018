// route configuration


import React from "react";

import {
       BrowserRouter as Router,  
       Route, 
        Switch,
        } from "react-router-dom";

        
import {App} 
        from "./App";


import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import Cart from "./cart/components/Cart";

// default import, alias by default
import ReduxHome from "./containers/ReduxHome";

import ProductList from "./cart/containers/ProductList";
 
// functional component
export default function Routes(props) {
    return (
        <Router>
            <App color='white'>
               <Switch>
                    <Route path="/"  exact   component={Home} />

                    <Route path="/redux-home"  exact   component={ReduxHome} />
                    
                    <Route path="/products"   component={ProductList} />
                    
                    <Route path="/about"   component={About} />

                    <Route path="/contact"   component={Contact} />
                    <Route path="/cart"   component={Cart} />
                    <Route path="*"   component={NotFound} />
                </Switch>
            </App>
        </Router>
    )
}
