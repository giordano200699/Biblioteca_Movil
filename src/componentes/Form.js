import React, {Component} from 'react';
import {StyleSheet, Text, View,AsyncStorage, TextInput, TouchableOpacity, Dimensions,Alert} from 'react-native';


var dimensiones = Dimensions.get('window');
var altura = dimensiones.height;
var ancho = dimensiones.width;


export default class Form extends Component {

/*
  constructor(props) {
    super(props);
    this.state = { codigo: '', contraseña: ''};
    this.loguearte = this.loguearte.bind(this);

  }*/

  constructor(){
    super();
    this.state = {
      codigo: '',
      contrasenia: '',
    }
  }

  cambioCodigo(codigo){
    this.setState({codigo});
  }

  cambioContrasenia(contrasenia){
    this.setState({contrasenia});
  }

  async preAutorizacion(properties){


    try {
      
      if(this.state.codigo.endsWith('@unmsm.edu.pe')){
        var codigoAEnviar = this.state.codigo;
      }else{
        var codigoAEnviar = this.state.codigo+'@unmsm.edu.pe';
      }
      let response = await fetch(
        'https://bibliotecabackend.herokuapp.com/usuarios/esUsuario?clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoYLnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaSYc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF36eiCuXJ3gkOfX8C4n',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            //nombre: 'giordano.barbieri@unmsm.edu.pe',
            //contrasenia: '16200251',
            nombre: codigoAEnviar,
            contrasenia: this.state.contrasenia,
          }),
      });
      let responseJson = await response.json();
      if(Object.keys(responseJson).length!=2){
        //properties.navigation.navigate('TabMenu',{usuario:responseJson[0]});
        properties.navigation.navigate('DrawerMenu',{usuario:responseJson[0]});
        //properties.navigation.navigate('Intro', {usuario: responseJson[0], properties: properties});
        //properties.navigation.navigate('Perfil',{usuario:responseJson[0]});
      }else{
        Alert.alert(
          responseJson.descripcion,
        );
      }
    } catch (error) {
      console.error(error);
    }
  }
 
  render() {

    return (
      <View style={styles.container}>
          <TextInput style={styles.inputBox} 
              placeholder='Código'
              placeholderTextColor='#ffffff'
              //onChangeText={(codigo) => this.setState({codigo})}  
              value={this.state.codigo}
              onChangeText={(codigo) => this.cambioCodigo(codigo)}
          />
          <TextInput style={styles.inputBox} 
              placeholder='Contraseña'
              secureTextEntry={true}
              placeholderTextColor='#ffffff'
              //onChangeText={(contraseña) => this.setState({contraseña})}  
              value={this.state.contrasenia}
              onChangeText={(contrasenia) => this.cambioContrasenia(contrasenia)}
          />
          {/*
          <TouchableOpacity style={styles.button} onPress={this.loguearte} >
              <Text style={styles.buttonText}> Acceder </Text>
          />*/}
          <TouchableOpacity style={styles.button} onPress={() => this.preAutorizacion(this.props.propForm)}>
              <Text style={styles.buttonText}> Acceder </Text>
          </TouchableOpacity>
      </View> 
    );
  }

  /*
  loguearte(){
		Alert.alert(
		'Acceso',
		'Te has logueado en el sistema - Codigo: ' + this.state.codigo + ' contraseña:  ' + this.state.contraseña)
	};
*/

  }




  const styles = StyleSheet.create({
    
    container : {
      //flex: 1,
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    inputBox: {
        //width:300,
        width: ancho/1.2,
        backgroundColor: 'rgba(255,255,255,0.3)',
        //borderRadius: 25,
        borderRadius: altura/23.7,
        //paddingHorizontal: 20,
        paddingHorizontal: ancho/18,
        fontSize: 16,
        //fontSize: altura/37,
        color: '#ffffff',
        //marginVertical: 10
        marginVertical: altura/59.2
    },

    
    button: {
        //width:300,
        width: ancho/1.2,
        backgroundColor:'#001970',
        //borderRadius: 25,
        borderRadius: altura/23.7,
        //marginVertical: 10
        marginVertical: altura/59.2,
        //paddingVertical: 13
        paddingVertical: altura/45.5
    },

    buttonText: {
        fontSize: 16,
        //fontSize: altura/37,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }

  });