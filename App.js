/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Navegacion from './Navegacion';
import Intro from './src/paginas/Intro'

console.disableYellowBox = true;

export default class App extends Component{

  render(){
    return(
      //<Navegacion/>
      <Intro/>
    );
  }
}
