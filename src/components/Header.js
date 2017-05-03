import React,{Component} from 'react';
import {Text,View} from 'react-native'


class Header extends Component{
    render(){
        return (
            <Text  style={{ marginTop: 20}} >Paella Calculator</Text>
        );
    }
}

export {Header};