import * as React from 'react';
import {Component} from 'react';

interface Props{
    className?: string,
    title: string,
    bodyText: string
}
interface State{}

export default class Item extends Component<Props, State>{
    constructor(props: Props){
        super(props)
    }

    render(){
        return(
            <div className={this.props.className}>
                <div className = "centered-title"> {this.props.title}</div>
                <div className = "centered-text"> {this.props.bodyText} </div>
            </div>
        )
    }

}