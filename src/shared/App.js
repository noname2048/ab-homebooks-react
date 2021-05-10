import { default as Home } from "pages/Home"
import { default as Profile } from "pages/Profile"
import React from 'react';
import { Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
        </div>
    );
    
}

export default App;
