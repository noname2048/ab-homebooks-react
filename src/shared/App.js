import { default as Home } from "pages/Home"
import { default as Profile } from "pages/Profile"
import React from 'react';
import { Route } from "react-router-dom";
import { default as Simple } from "pages/Simple"

const App = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/simple" component={Simple} />
        </div>
    );
    
}

export default App;
