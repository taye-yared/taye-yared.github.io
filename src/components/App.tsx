import * as React from 'react';
import {Component} from 'react';
import TopBar from './common/TopBar';

require("../style/Website.css")

interface State{}

interface Props{
    children?: any
}

export default (props: any) => {
    return(
        <div>
            <TopBar />
            {props.children}
        </div>
    )
       
}