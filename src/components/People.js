import React,{Component} from 'react';
import {Text,View,Slider,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    peopleContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor:"red"

    },
    peopleSlider:{
        flex:1
    }
});

class People extends Component{
    render(){
        return(
            <View style={styles.peopleContainer}>
                <Text>{this.props.min}</Text>
                <Slider style={styles.peopleSlider}
                    minimumValue={this.props.min}
                    maximumValue={this.props.max}
                    step={1}
                    value={25}
                    onValueChange={(( value ) => {this.props.onChangeNumberOfPeople(value)}).bind(this) }
                />
                <Text>{this.props.max}</Text>
            </View>

        )
    }
}





export {People};