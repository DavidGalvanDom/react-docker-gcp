import React from 'react'
import {    
    Switch,
    Route,    
    useRouteMatch
  } from "react-router-dom";

import { AgendaScreen } from '../agenda/AgendaScreen.js';
import { ReporteScreen } from '../reportes/ReporteScreen.js';
import { MainScreen } from '../share/MainScreen.js';
import { NavBar } from '../share/NavBar.js'

export const MainRouter = () => {
    let match = useRouteMatch();

    return (
        <div>
            <NavBar />
            <div className="flex">
                <Switch>
                    <Route path={`${match.url}/reportes`} component={ ReporteScreen } />                    
                    <Route path={`${match.url}/agenda`} component={ AgendaScreen } />       
                    <Route path={match.path} component={ MainScreen } />                        
                </Switch>
            </div>

        </div>
    )
}
