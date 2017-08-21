import React,{Component} from 'react';
import {Text,View,Slider,StyleSheet} from 'react-native'
import Numeral from 'numeral'
import {connect} from 'react-redux'

const styles = StyleSheet.create({

    text: {
        fontSize: 45,
        textAlign: 'center',
        fontWeight: '500',
        margin: 10,
        marginTop: 20,
        textAlignVertical:'center'
    }
});

class Ingredient extends Component{
    render(){
        console.log(this.props)
        return (<Text style={styles.text}>
                    {this.props.name} {Numeral(this.props.amount).format('0,0.00')}
                {this.props.unit}</Text>);
    }


}

const mapStateToProps = state =>{
    console.log("++++++")
    return {xx:state}
}

//export default connect(mapStateToProps)(Ingredient);
export {Ingredient};
export default connect(mapStateToProps)(Ingredient);
