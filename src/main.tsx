import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import App from './components/App';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

injectTapEventPlugin()

const ThemedApp = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <App />
    </ MuiThemeProvider>
)

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={ThemedApp}>
            <IndexRoute component={null} />
            <Route path="projects" component={null} />
            <Route path="resume" component={null} />
        </Route>
    </Router>
    ), 
    document.getElementById('app'))