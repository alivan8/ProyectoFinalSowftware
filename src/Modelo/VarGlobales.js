import React, { Component } from 'react';
import { Text } from 'native-base'
import * as firebase from 'firebase'
import firebaseConfig from './firebase'

firebase.initializeApp(firebaseConfig);

//Dato local
import { AsyncStorage } from 'react-native';

//Importacion de controladores
import ConLinea from '../Controlador/ConLinea'
import ConUsuario from '../Controlador/ConUsuario'
import ConAux from '../Controlador/ConAux'

console.disableYellowBox = true;

export class Provider extends Component {
  state = {
    UserId: null,
    esTemporal: 'S',
    Datos: {},
    //Funciones de la Lineas de micros
    ObtenerLineas: (e) => { ConLinea.ObtenerLineas(e) },
    ObtenerRutaLinea: (Linea)=>{ return ConLinea.ObtenerRutaLinea(Linea) },
    ObtenerRutasCercanas: ()=>{ return ConLinea.ObtenerRutasCercanas() },
    //Funciones para usuarios
    GuardarUbicacionUserHogar: (coordenadas,nav)=>{ ConUsuario.GuardarUbicacionUserHogar(this,coordenadas,nav) },
    GuardarUbicacionUserTrabajo: (coordenadas,nav)=>{ ConUsuario.GuardarUbicacionUserTrabajo(this,coordenadas,nav) },
    ObtenerUbicacionHogar: ()=>{ return ConUsuario.ObtenerUbicacionHogar(this) },
    ObtenerUbicacionTrabajo: ()=>{ return ConUsuario.ObtenerUbicacionTrabajo(this) },
    GuardarFavoritos: (LlaveFav)=>{ ConUsuario.GuardarFavoritos(this, LlaveFav) },
    ListaFavoritos: (e)=>{ ConUsuario.ListaFavoritos(this,e) },
    QuitarEscuchaListaFav: ()=>{ ConUsuario.QuitarEscuchaListaFav() },
    QuitarListaFavoritos: (e)=>{ ConUsuario.QuitarListaFavoritos(this, e) },
    //Funciones auxiliares
    calculateDistance: (l1,lo1,l2,lo2)=>{ return ConAux.calculateDistance(l1,lo1,l2,lo2) }
  }

  componentWillMount() {
    this.ObtenerDatoLoca()
  }

  async ObtenerDatoLoca() {
    try {
      await AsyncStorage.getItem('idMiBus').then(value => {
        if (value !== null) {
          this.setState({ UserId: value })
        } else {
          //Generar llave temporal
          let LlaveTemporal = ConUsuario.ObtenerLlaveTemporal()
          this.GuardarDatoLoca(LlaveTemporal)
        }
      })
    } catch (error) {
      console.log("error")
    }
  }

  async GuardarDatoLoca(llave) {
    try {
      await AsyncStorage.setItem('idMiBus', llave).then( ()=>{ this.setState({ UserId: llave }) } )
    } catch (error) {
      console.log("Sucedio un error guillermo ")
    }
  }

  render() {
    if (this.state.UserId !== null) {
      return (
        <VarGlobales.Provider
          value={{
            state: this.state
          }}
        >
          {this.props.children}
        </VarGlobales.Provider>
      )
    } else {
      return (<Text> Cargando </Text>)
    }

  }

}

export const VarGlobales = React.createContext();
export const Consumer = VarGlobales.Consumer