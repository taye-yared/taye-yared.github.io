import * as React from 'react';
import {Component} from 'react';
import {Avatar} from 'material-ui';
import Item from './item';
const myImage = require("../../images/me.jpg")
const uiucImage = require("../../images/uiuc-quad.jpg")

interface State{}
interface Props{}

export default class AboutMe extends Component<undefined, State>{
    constructor(props: Props){
        super(props)
    }

    render(){
        return(
            <div>
                <div classname= "uiuc-background">
                    <h1 className="title-header">About Me</h1>
                    <img src={myImage} className="my-avatar" width={140} height={140}/>
                    <Item title="UIUC Undergrad" bodyText="Current Junior" />
                </div>
            </div>
        )
    }

}
