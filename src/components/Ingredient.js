import React,{Component} from 'react';
import {Text,View,Slider,StyleSheet} from 'react-native'
import Numeral from 'numeral'


const styles = StyleSheet.create({

    text: {
        fontSize: 45,
        textAlign: 'center',
        fontWeight: '500',
        margin: 10,
        textAlignVertical:'center'
    }
});

class Ingredient extends Component{
    render(){
        return (<Text style={styles.text}>{this.props.name} {Numeral(this.props.amount).format('0,0.00')} {this.props.unit}</Text>);
    }
}

export {Ingredient};