import React,{Component} from 'react';
import {Text,View,Slider,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    peopleContainer:{
        backgroundColor:"red",
        flex:1,

    },
    peopleSlider:{
        flex:1

    },
    peopleSliderContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        textAlignVertical:'center',
        marginHorizontal:20,
        marginTop:15,
    }
});

class People extends Component{

    render(){
        return(
                <View style={styles.peopleContainer}>
                    <View>
                         <Text style={styles.text} >People {this.props.peopleNumber}</Text>
                    </View>
                    <View style={styles.peopleSliderContainer}>
                        <Text style={styles.text}> {this.props.min}</Text>
                        <Slider style={styles.peopleSlider}
                            minimumValue={this.props.min}
                            maximumValue={this.props.max}
                            step={1}
                            value={this.props.peopleNumber}
                            onValueChange={this.props.onChangeNumberOfPeople}
                        />
                        <Text style={styles.text}>{this.props.max}</Text>
                    </View>
                </View>

        )
    }




}





export {People};