import React, { Component } from 'react';
import {View,StyleSheet} from 'react-native'
import {Header,People,Ingredient} from './'


class PaellaCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {peopleNumber:0}
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:4}}>
                    <Header />
                </View>
                <View style={{flex:6}}>
                    <People min={0} max={50} peopleNumber={this.state.peopleNumber} onChangeNumberOfPeople={this.onChangeNumberOfPeople.bind(this)} />
                </View>
                <View style={{flex:8, backgroundColor:"yellow",}}>
                    <Ingredient name='Rice' amount={this.state.peopleNumber*0.1} unit='kilos' />
                </View>
                <View style={{flex:8, backgroundColor:"red",}}>
                    <Ingredient name='Water' amount={this.state.peopleNumber*0.225} unit='litres'/>
                </View>
            </View>
        );
    }
    onChangeNumberOfPeople = (peopleNumber) => {
        this.setState({peopleNumber:peopleNumber})
    }
}






export  {PaellaCalculator};