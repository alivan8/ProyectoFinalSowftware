import React,{Component} from 'react';
import { Image, Text,button,View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';




export default class GooglePlacesInput extends Component {

  constructor(props){
    super(props);
    this.state = ({
      latitude :'',
      longitude:''
    })
  }

    render() {
        return (
     
    <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
      
      this.setState({
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng, latitudeDelta: 0.3, longitudeDelta: 0.3
        
      });
    console.log(this.state.latitude,this.state.longitude)
       
       this.props.Obtener( { latitude: details.geometry.location.lat, longitude: details.geometry.location.lng } )
       
      }}

      getDefaultValue={() => ''}

      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyCYaYM1r-MkW40b6oqSARN3tbCC486IPUQ',
        language: 'es', // language of the results
        types: 'address' // default: 'geocode'
      }}

      styles={{
        textInputContainer: {
          width: '100%'
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}

      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        type: 'cafe'
      }}
      
      GooglePlacesDetailsQuery={{
        // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
        fields: 'formatted_address',
      }}

      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      
      predefinedPlacesAlwaysVisible={true}

     
    />
  

        );
    }
}







