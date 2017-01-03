import * as React from 'react';
import {Component} from 'react';
import {RaisedButton, AppBar, Drawer, MenuItem, Divider, FontIcon} from 'material-ui';
import {blueGrey400} from 'material-ui/styles/colors';

const gitImage = require('../images/GitHub-Mark.png')

interface State{
    showDrawer: boolean
}

interface Props{}


export default class App extends Component<undefined, State>{
    constructor(props: Props){
        super(props)
        this.state={showDrawer: false}
    }

    onToggleDrawer = () =>{
        let show = (this.state.showDrawer)? false:true
        this.setState({showDrawer: show})
    }
    

    render(){
        let drawerWidth = 175
        const iconStyles = {marginRight: 24};
        return(
            <div>
                <Drawer 
                    open={this.state.showDrawer}
                    width = {drawerWidth}
                    docked={false}
                    onRequestChange={(open) => this.setState({showDrawer:open})}>
                    <MenuItem onTouchTap={this.onToggleDrawer}>About Me</MenuItem>
                    <Divider style={{zIndex: 3}} />
                    <MenuItem onTouchTap={this.onToggleDrawer}>Projects</MenuItem>
                    <Divider style={{zIndex: 3}} />
                    <MenuItem onTouchTap={this.onToggleDrawer}>Resume</MenuItem>
                </Drawer>
                <AppBar 
                    title="Yared's Website" 
                    onLeftIconButtonTouchTap= {this.onToggleDrawer}
                    style = {{color: blueGrey400, paddingLeft: (this.state.showDrawer)?drawerWidth:"20"}}
                    zDepth = {3}>
                    
                />
                <a href="https://github.com/taye-yared" style={{paddingRight: 600, paddingTop: 20}}>
                        <img  src={gitImage} alt="Github Symbol" height="34" width="34" />
                </a>
                </AppBar>
            </div>
        )
    }
} 