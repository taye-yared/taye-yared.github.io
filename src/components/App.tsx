import * as React from 'react';
import {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import TopBar from './common/TopBar';

require("../style/Website.css");

interface State{}

interface Props{
    children?: any
}

export default class App extends Component<Props, State> {

    render(){
        return(
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div>
                    <TopBar />
                    {this.props.children}
                </div>
            </ MuiThemeProvider>
        )
    }  
}