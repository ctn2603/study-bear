import {React, useState, useEffect, useContext} from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindowF, InfoBox } from '@react-google-maps/api';
import { Box, Text, Flex, Spacer} from '@chakra-ui/react'
import { StateContext } from '../App';
/* tutorial:
    https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d

   Style Documentation:
   https://react-google-maps-api-docs.netlify.app/

   Fixing the centering issue:
   https://stackoverflow.com/questions/68425883/how-can-i-get-the-current-map-center-coordinates-using-getcenter-in-react-googl
*/
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


function GMap({height, width, setEvent, setActiveBoxData}){

  const [mapref, setMapRef] = useState(null);
  const [center, setCenter] = useState(null);
  const handleOnLoad = map => {
    setMapRef(map);
  };

  const handleCenterChanged = () => {
    if (mapref) {
      const newCenter = mapref.getCenter();
      console.log(newCenter)
    }
  };
  
  let defaultCenter = {
    lat: 37.872024, lng: -122.260079
  }

  const setEventAndId = (pinData, e) => {
    setActiveBoxData(pinData)
    setEvent(e)
    if (mapref) {
        setCenter(mapref.getCenter())
    }
    console.log('x: ', e.pixel.x, ' y: ', e.pixel.y)
    console.log(e)

  }

  const mapStyles = {        
    height: height,
    width: width
    };


    const state = useContext(StateContext).state
    const setState = useContext(StateContext).setState
    
    const handleClick = (e) => {
        const pos = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        }
        state.recentClickPos = pos
        setState(state)
        console.log(state.recentClickPos)
    }
  return (
    <LoadScript googleMapsApiKey='AIzaSyCTFjsOkOx6a2s8WoIS9pHFfdiqGTOECv8'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={16}
        center={center || defaultCenter}
        options={{styles:darkMode}}
        onClick={handleClick}
        onLoad={handleOnLoad}
        onCenterChanged={handleCenterChanged}
      >
        {pinLocations.map((item) => (
            <MarkerF position={{lat: item.lat, lng:item.lng}} onMouseOver={(e)=>(setEventAndId(item, e))} onMouseOut={()=> setEventAndId(null, null)}>
        
            </MarkerF>
        ))}
      </GoogleMap>
    </LoadScript>
  )      
}

export default GMap;

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
]