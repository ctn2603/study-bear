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

const lightMode = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#0327d6"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#f6f540"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#0327d6"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#dfe2ff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#0327d6"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#0327d6"
            }
        ]
    }
]