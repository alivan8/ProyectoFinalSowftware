import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider} from './src/Modelo/VarGlobales'


import Home from './src/Vista/Home'
import Mapa from './src/Vista/Mapa'
import Lineas from './src/Vista/Lineas'

//Auxiliares
import GuardarUbicacion from './src/Vista/Usuario/GuardarUbicacion'
import MostrarRuta from './src/Vista/Linea/MostrarRuta'


const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  MostrarRuta: { screen: MostrarRuta },
  Mapa: { screen: Mapa },
  Lineas: { screen: Lineas },
  GuardarUbicacion: { screen: GuardarUbicacion },
}, {
  defaultNavigationOptions: {
    header: null
  },
  navigationOptions: {
    tabBarLabel: 'Home!',
  },
});
  
const AppContainer= createAppContainer(AppNavigator);


export default class App extends Component{

  render(){
    return(
      <Provider>
        <AppContainer/>
      </Provider>
    )
  }

}