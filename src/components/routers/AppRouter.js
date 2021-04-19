import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route    
  } from "react-router-dom";

import { AuthScreen } from '../auth/AuthScreen';
import { MainRouter } from './MainRouter';

export const AppRouter = () => {
    return (
        <div>
            <Router>
            <div>               
                <Switch>
                    <Route path="/auth" component={ AuthScreen } />                    
                    <Route path="/" component={ MainRouter } />                                            
                </Switch>
            </div>
            </Router>
        </div>
    )
}
