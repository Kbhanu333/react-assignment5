import React, { Component } from 'react'

export default function HocTitle(HocName) {
    class Hoc extends Component{
        render(){
            return <HocName name="interpreted language"/> 
        }
    }
    return Hoc;
}