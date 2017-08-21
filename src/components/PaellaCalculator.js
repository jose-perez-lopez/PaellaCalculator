import React, { Component } from 'react';
import {View,StyleSheet} from 'react-native'
import {createStore } from 'redux'
import {Provider} from 'react-redux'

import {rootReducer} from '../reducers/'
import {Header,People,Ingredient} from './'


class PaellaCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {peopleNumber:0}
    }
    render() {
        return (
            <Provider store ={createStore(rootReducer)}>
                <View style={{flex:1}}>
                    <View style={{flex:4, backgroundColor:"#AD1519",}}>
                        <People min={0} max={50} peopleNumber={this.state.peopleNumber}
                                onChangeNumberOfPeople={this.onChangeNumberOfPeople.bind(this)}
                        />
                    </View>
                    <View style={{flex:8, backgroundColor:"#FABD00",}}>
                        <Ingredient name='Rice' amount={this.state.rice} unit='kilos' />
                    </View>
                    <View style={{flex:4, backgroundColor:"#AD1519",}}>
                        <Ingredient name='Water' amount={this.state.water} unit='litres'/>
                    </View>
                </View>
            </Provider>
        );
    }
    onChangeNumberOfPeople = (peopleNumber) => {

        //store.dispatch(action);


        console.log("*****STATE******")
        console.log(this.state)

        //this.setState({peopleNumber:peopleNumber})
    }
}






export  {PaellaCalculator};