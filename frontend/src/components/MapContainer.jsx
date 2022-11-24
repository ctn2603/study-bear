import {React, useState, createContext, useContext, useEffect} from 'react'
import GMap from './GoogleMap'
import { Box, Text } from '@chakra-ui/react'
const EventContext = createContext(null)

function MapContainer({height, width}) {
    const [currentEvent, setEvent] = useState(null)
    const [activeBoxData, setActiveBoxData] = useState(null)


    const infoBox = () => {
        if (currentEvent == null) {
            console.log('here')
            return
        }
        let boxStyle = {
            position:'fixed', zIndex:'999',
            top:currentEvent.domEvent.clientY - 100,
            left: currentEvent.domEvent.clientX + 15
        }
        return (
            <Box borderRadius='5' p='7' bg='#e3c3c3' style={boxStyle}>
                <Text m='0' fontSize='14' bg='#3489eb' p='4' borderRadius='10'> MainStacks C5</Text>
                <Text m='1' fontSize='10' bg='#39a2bd' p='3' borderRadius='8'> till 8:00 PM</Text>
                <Text m='0' fontSize='10' bg='#db307d' p='3' borderRadius='8'>cap: 7/10</Text>
            </Box>
        )
    }
    return (
        <div style={{position:'relative'}}>
            {infoBox()}
            <GMap height={height} width={width} setEvent={setEvent} setActiveBoxData={setActiveBoxData}/>
        </div>    
  
    )
}

export default MapContainer