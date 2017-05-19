import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native'


const styles = StyleSheet.create({

    text: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 25,
        textAlignVertical:'center'
    }
});

class Header extends Component{
    render(){
        return (
            <Text  style={styles.text} >Paella Calculator</Text>
        );
    }
}

export {Header};