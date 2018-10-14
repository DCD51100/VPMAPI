import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import _ from 'lodash';

import PrivateLayout from './private';
import PublicLayout from './public';

import privateRoutes from './routes/privateRoutes';
import publicRoutes from './routes/publicRoutes';

import { UserActions } from '../_actions/user.actions';
import LoginPage from '../_components/Public/LoginPage';
import NotFound from './public/NotFound';

class Template extends Component {

    constructor(props) {
        super(props);
        this.userActions = new UserActions(this.props.dispatch);
    }

    componentWillMount() {

    }


    render() {
        {
            _.map(publicRoutes, (route, key) => {
                const { component, path } = route;
                return (
                    <Route
                        exact
                        path={path}
                        key={key}
                        render={(route) => <PublicLayout component={component} route={route} user={user} />}
                    />
                );
            })
        }
        const user = this.props.user;
        //<BrowserRouter>
        //    <Switch>
        //        {_.map(publicRoutes, (route, key) => {
        //            const { component, path } = route;
        //            return (
        //                <Route
        //                    exact
        //                    path={path}
        //                    key={key}
        //                    render={(route) => <PublicLayout component={component} route={route} user={user} />}
        //                />
        //            );
        //        })}

        //        {_.map(privateRoutes, (route, key) => {
        //            const { component, path } = route;
        //            return (
        //                <Route
        //                    exact
        //                    path={path}
        //                    key={key}
        //                    render={(route) =>
        //                        user.logged ? (
        //                            <PrivateLayout component={component} route={route} user={user} userActions={this.userActions} />
        //                        ) : (
        //                                <PublicLayout component={LoginPage} route={route} user={user} />
        //                            )
        //                    }
        //                />
        //            );
        //        })}
        //        <Route component={NotFound} />
        //    </Switch>
        //</BrowserRouter>
    }
}

function mapStateToProps(state, props) { return { user: state } }
function mapDispatchToProps(dispatch) { return { dispatch }; }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Template);
