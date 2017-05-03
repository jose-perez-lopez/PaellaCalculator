import React,{Component} from 'react';
import {Text,View,Slider} from 'react-native'


class Ingredient extends Component{
    render(){

        return (<Text>{this.props.name}</Text>);

    }
}

export {Ingredient};