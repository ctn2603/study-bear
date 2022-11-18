import {React, useState} from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindowF, InfoBox } from '@react-google-maps/api';
import { Box, Text, Flex, Spacer} from '@chakra-ui/react'

/* tutorial:
    https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d
*/

const MapContainer = ({height, width}) => {
  
  const [boxID, setBoxID] = useState(null);
  const [boxOpen, setOpen] = useState(false)
  
  const makeBox = (id, lat, lng) => {
  
    
    let pos = {lat: lat, lng: lng}
    const options = { closeBoxURL: '', enableEventPropagation: true };
    

    if (id === boxID) {

      return (
        
          <InfoWindowF position={pos} options={options} style={{padding: '1px !important'}} >
            <Box>
              <Text bg='#2bdde3' color='white' p='10' fontSize='20' mb='0' w='30' borderRadius='20'>Bob's Study Group</Text>
              <Flex>
                <Text bg='#2a5ade' color='white' fontSize='10' w='44%' mt='4' mb='4' borderRadius='10' p='4' style={{display:'inline-block'}} >2:30PM - 5:00PM</Text>
                <Spacer />
                <Text bg='#de1f6b' color='white' fontSize='10' w='44%' mt='4' mb='4' borderRadius='10' p='4' style={{display:'inline-block'}} >Cap: 8/10</Text>
              </Flex>
              <Text bg='#6255c2' color='white' p='4' fontSize='10' mt='0' w='30' borderRadius='10'>MainStacks Level:C</Text>
              
            </Box>
          </InfoWindowF>
       
      )
    }
  }

  const pinLocations = [
    {id: 1, lat: 37.872024, lng: -122.260579},
    {id: 2, lat: 37.873024, lng: -122.260479},
    {id: 3, lat: 37.874024, lng: -122.260379},
    {id: 4, lat: 37.875024, lng: -122.260279},
    {id: 5, lat: 37.876024, lng: -122.261079},
    {id: 6, lat: 37.877024, lng: -122.272179},
    {id: 7, lat: 37.877024, lng: -122.261179},
    {id: 8, lat: 37.870024, lng: -122.260279},
    {id: 9, lat: 37.879024, lng: -122.260379},
    {id: 10, lat: 37.887024, lng: -122.264179},
    {id: 11, lat: 37.987024, lng: -122.264179},
    {id: 12, lat: 37.687024, lng: -122.264179},
    {id: 13, lat: 37.87167435136701, lng: -122.25697265964077},
    {id: 14, lat: 37.87191548645541, lng: -122.26283052815555},
    {id: 15, lat: 37.87403314540354, lng:-122.25776802547658 },
    {id: 16, lat: 37.8702259334051, lng: -122.26287922621155}


  ]


  const mapStyles = {        
    height: height,
    width: width};
  
  let defaultCenter = {
    lat: 37.872024, lng: -122.260079
  }

  return (
    <LoadScript googleMapsApiKey='AIzaSyCTFjsOkOx6a2s8WoIS9pHFfdiqGTOECv8'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={16}
        center={defaultCenter}
        options={{styles:darkMode}}
        onClick={(e)=>(console.log('mouse lat/lng: ', e.latLng.lat(), e.latLng.lng(), e))}
      >
        {pinLocations.map((item) => (
            <MarkerF position={{lat: item.lat, lng:item.lng}} onMouseOver={()=>(setBoxID(item.id))} onMouseOut={()=>setBoxID(null)}>
              {makeBox(item.id, item.lat, item.lng)}
            </MarkerF>
        ))}



      </GoogleMap>
    </LoadScript>
  )      
}

export default MapContainer;

/* Map Style Credit: SnazzyMaps.com */

const darkMode = [
  {
      "featureType": "all",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#202c3e"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "gamma": 0.01
          },
          {
              "lightness": 20
          },
          {
              "weight": "1.39"
          },
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "weight": "0.96"
          },
          {
              "saturation": "9"
          },
          {
              "visibility": "on"
          },
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
          {
              "lightness": 30
          },
          {
              "saturation": "9"
          },
          {
              "color": "#29446b"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
          {
              "saturation": 20
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
          {
              "lightness": 20
          },
          {
              "saturation": -20
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
          {
              "lightness": 10
          },
          {
              "saturation": -30
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#193a55"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "saturation": 25
          },
          {
              "lightness": 25
          },
          {
              "weight": "0.01"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "lightness": -20
          }
      ]
  }