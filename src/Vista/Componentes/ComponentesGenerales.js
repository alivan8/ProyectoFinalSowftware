import React, { Component } from 'react'
import { View } from 'react-native'
import { FooterTab, Button, Text, Icon } from 'native-base';
import { Consumer } from '../../Modelo/VarGlobales'
import MapView, { Marker } from 'react-native-maps';
import Estilo from '../Styles/Styles'

export class PiePagina extends Component {
    render() {
        return (
            <FooterTab style={{ backgroundColor: '#E7E7E7' }}>
                <Button vertical
                    onPress={() => { this.props.Navegador.navigate('Home') }}
                >
                    <Icon style={{ color: '#808080' }} name="ios-more" />
                    <Text style={{ color: '#808080' }}>Direcciones</Text>
                </Button>
                <Button vertical
                    onPress={() => { this.props.Navegador.navigate('Mapa',{Destino: []}) }}
                >
                    <Icon style={{ color: '#808080' }} active name="md-map" />
                    <Text style={{ color: '#808080' }}>Mapa</Text>
                </Button>
                <Button vertical
                    onPress={() => { this.props.Navegador.navigate('Lineas') }}
                >
                    <Icon style={{ color: '#808080' }} name="md-git-merge" />
                    <Text style={{ color: '#808080' }}>Lineas</Text>
                </Button>
            </FooterTab>
        )
    }
}

export class MapaG extends Component {
    render() {
        return (
            <View style={Estilo.ContainerMap}>
                <MapView style={Estilo.EstiloMap}
                    initialRegion={{
                        latitude: -17.79104884,
                        longitude: -63.17754828,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    showsUserLocation={true}
                    onPress={ ()=>{ console.log("Pruebsa") } }
                >
                    {this.props.children}
                </MapView>
            </View>
        )
    }
}

PiePagina.contextType = Consumer;
