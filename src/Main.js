
import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import {Colors} from './styles'

/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/

import Login from './paginas/Login';

export default class App extends Component {
  
  render() {
    return (
        //<View style={styles.container}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <StatusBar style={styles.statusBar} barStyle='light-content'/>
          <Login propsLogin = {this.props}/>
        </ScrollView>
        //</View>
    );
  }
}

/*
const styles = StyleSheet.create({
  container : {
    backgroundColor: '#303f9f',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

});*/

const styles = StyleSheet.create({
  container : {
    backgroundColor: Colors.primary,
    flex: 1
    //flexDirection: 'column',
    //alignItems: 'center',
    //justifyContent: 'center'
  },

  statusBar : {
    backgroundColor: Colors.primary_dark,
  }

});