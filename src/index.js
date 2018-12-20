import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './_helpers';
import { loadAuthors } from './actions/authorActions';
import { loadQuestions } from './actions/questionActions';
import {loadMessages} from './actions/messageActions';

import './_styles/styles.scss';
import '../node_modules/toastr/build/toastr.min.css';

store.dispatch(loadQuestions());
store.dispatch(loadMessages());
store.dispatch(loadAuthors());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
