import React, { Component } from 'react';
// import logo from './logo.svg';
import { Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

import { history } from './_helpers';
import { alertActions } from './_actions';
import routes from './routes';

//process.env.NODE_ENV

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="app">
        <div className="container-fluid p-0">
          {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
          <Router history={history}>
            <div>
              <Switch>
                {routes.map((route, i) => (
                  <Route key={i}
                    path={route.path}
                    render={props => (
                      <route.component {...props} routes={route.routes} />
                    )}
                  />
                ))}
              </Switch>
            </div>
          </Router>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
