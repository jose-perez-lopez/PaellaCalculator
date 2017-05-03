import React,{Component} from 'react';
import { AppRegistry} from 'react-native';
import {PaellaCalculator} from './src/components'

class App extends Component {
    render() {
        return (<PaellaCalculator />);
    }
}

export default  App;
AppRegistry.registerComponent('PaellaCalculator', () => PaellaCalculator);

