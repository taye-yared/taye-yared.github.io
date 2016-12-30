import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App.jsx';

injectTapEventPlugin()

const ThemedApp = () => (
    <MuiThemeProvider>
        <App />
    </ MuiThemeProvider>
)

ReactDOM.render(<ThemedApp />, document.getElementById('app'))