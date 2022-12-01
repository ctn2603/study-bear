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


function GMap({height, width, setEvent, setActiveBoxData}){
    const state = useContext(StateContext).state
    const setState = useContext(StateContext).setState
    const events = state.events
    
    
    //useEffect(()=>(console.log('changing stuff')), [events])

  const [mapref, setMapRef] = useState(null);
  const [center, setCenter] = useState(null);
  const handleOnLoad = map => {
    setMapRef(map);
  };

  const handleCenterChanged = () => {
    if (mapref) {
      const newCenter = mapref.getCenter();
    }
  };
  
  let defaultCenter = {
    lat: 37.872024, lng: -122.260079
  }

  //Incorporate the setEvent function into the global state. This is kinda weird right now, but it works.
  const setEventAndId = (event, e) => {
    if (mapref) {
        setCenter(mapref.getCenter())
    }
    setEvent(e)
    state.infoBoxId = event.id
    setState(JSON.parse(JSON.stringify(state)))
  }

    const mouseOut = () => {
        setEvent(null)
        state.infoBoxId = null
        setState(state)
    }

  const mapStyles = {        
    height: height,
    width: width
    };

    const handleClick = (e) => {
        const pos = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        }
        state.recentClickPos = pos
        setState(state)
    }


  return (
    <LoadScript googleMapsApiKey='AIzaSyCTFjsOkOx6a2s8WoIS9pHFfdiqGTOECv8'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={16}
        center={center || defaultCenter}
        options={{styles:lightMode}}
        onClick={handleClick}
        onLoad={handleOnLoad}
        onCenterChanged={handleCenterChanged}
      >
        {events.map((event) => (
            <MarkerF position={{lat: event.lat, lng:event.lng}} onMouseOver={(e)=>(setEventAndId(event, e))} onMouseOut={()=> mouseOut()}>
        
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

const lightMode = [
    {
        "featureType": "poi.attraction",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]