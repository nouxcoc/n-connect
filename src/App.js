import React, { Component } from 'react';
// import logo from './logo.svg';
import { Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

import { history } from './_helpers';
import { alertActions } from './_actions';
import routes from './routes';

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
          {/* <Router history={history}>
            <div>
              <PrivateRoute exact path="/" component={DashBoard} />
              <PrivateRoute exact path="/questions" component={QuestionsPage} />
              <PrivateRoute path="/question/:id?" component={ManageQuestionPage} />

              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
            </div>
          </Router> */}
          <Router history={history}>
            <div>
              {routes.map((route, i) => (
                // <Route path={route.path} key={i} component={route.component} routes={route.routes}></Route>
                <Route key={i}
                  path={route.path}
                  render={props => (
                    // pass the sub-routes down to keep nesting
                    <route.component {...props} routes={route.routes} />
                  )}
                />
              ))}
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
