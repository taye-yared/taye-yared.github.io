import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import AboutMe from './components/about-me/AboutMe';

injectTapEventPlugin()

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={AboutMe} />
            <Route path="projects" component={null} />
            <Route path="resume" component={null} />
        </Route>
    </Router>
    ), 
    document.getElementById('app'))