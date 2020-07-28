import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import {Switch} from "react-router";

export default class Routing {
    static get routes()
    {
        return this._routes || [];
    }

    static set routes(r)
    {
        this._routes = r;
    }

    static getCmsAssetId(path)
    {
        return (Routing.routes.find(r => r.path === path) || {}).cmsassetid;
    }

    static processRoutes() {
        ReactDOM.render(
            <Router>
                <Switch>
                    {renderRoutes(Routing.routes)}
                </Switch>
            </Router>,
            document.getElementById('app')
        );
    }
}