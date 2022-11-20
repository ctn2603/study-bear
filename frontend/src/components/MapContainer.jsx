import {React, useState, createContext, useContext} from 'react'
import GMap from './GoogleMap'
import { Box, Text } from '@chakra-ui/react'
const EventContext = createContext(null)

function MapContainer({height, width}) {
    const [currentEvent, setEvent] = useState(null)
    const [activeBoxData, setActiveBoxData] = useState(null)

    const infoBox = () => {
        if (currentEvent == null) {
            return
        }
        let boxStyle = {
            'background-color': 'white',
            position:'fixed', zIndex:'999',
            top:currentEvent.domEvent.clientY - 50,
            left: currentEvent.domEvent.clientX
        }
        return (

            <Box borderRadius='5' p='8' bg='white' style={boxStyle}>
                hello
            </Box>
        )
    }
    return (
        <div style={{position:'relative'}}>
            {infoBox()}
            <GMap height='75vh' width='50vw' setEvent={setEvent} setActiveBoxData={setActiveBoxData} />
        </div>    
  
    )
}

export default MapContainer