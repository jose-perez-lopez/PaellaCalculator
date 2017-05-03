import React, { Component } from 'react';
import {View,StyleSheet} from 'react-native'
import {Header,People,Ingredient} from './'


class PaellaCalculator extends Component {
    render() {
        return (

            <View style={styles.peopleContainer}>
                <View style={{flex:1}}>
                    <Header onChangeNumberOfPeople={this.changeNumberOfPeople.bind(this)} />
                </View>
                <View style={{flex:1}}>
                    <People min={0} max={50} />
                </View>
                <View style={{flex:3}}>
                    <Ingredient name='Rice' amout='0' unit='kilos'/>
                </View>
                <View style={{flex:3}}>
                    <Ingredient name='Water' amout='0' unit='litres'/>
                </View>
            </View>
        );
    }

    changeNumberOfPeople = (peopleNumber) => {
        console.log('XXX',peopleNumber)
    }
}




const styles = StyleSheet.create({
    peopleContainer:{
        flex: 1,

    }
});


export  {PaellaCalculator};