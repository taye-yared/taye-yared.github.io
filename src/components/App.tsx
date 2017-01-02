import * as React from 'react';
import {Component} from 'react';
import {RaisedButton} from 'material-ui';

interface State{}

export default class App extends Component<State, undefined>{
    render(){
        return(
            <div>
                Hello World !!!
                <RaisedButton label="Still Worked" />
            </div>
        )
    }
} 