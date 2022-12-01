import {React, useState, createContext, useContext, useEffect} from 'react'
import GMap from './GoogleMap'
import { Box, Text, Flex} from '@chakra-ui/react'
import { StateContext } from '../App'
import { Link } from 'react-router-dom'
import { PlusSquareIcon } from '@chakra-ui/icons'

const EventContext = createContext(null)

function MapContainer({height, width}) {
    const [currentEvent, setEvent] = useState(null)
    const [activeBoxData, setActiveBoxData] = useState(null)

    const state = useContext(StateContext).state
    const setState = useContext(StateContext).setState

    const infoBox = () => {
        if (currentEvent == null || state.infoBoxId == null) {
            return
        }
        console.log('curr event', currentEvent)
        let boxStyle = {
            position:'fixed', zIndex:'999',
            top:currentEvent.domEvent.clientY - 100,
            left: currentEvent.domEvent.clientX + 15
        }
        var infoEvent = state.events[state.infoBoxId]
        console.log('heeerreee')
        return (
            <Box borderRadius='5' p='7' bg='#e3c3c3' style={boxStyle}>
                <Text m='0' fontSize='14' bg='#3489eb' p='4' borderRadius='10'> {infoEvent.title}</Text>
                <Text m='1' fontSize='10' bg='#39a2bd' p='3' borderRadius='8'> {infoEvent.time}</Text>
                <Text m='0' fontSize='10' bg='#db307d' p='3' borderRadius='8'>{infoEvent.capacity}</Text>
            </Box>
        )
    }
    return (
        <Box h={height} w={width} style={{position:'relative', marginLeft:'20px', 'box-shadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
            {infoBox()}

            <Box style={{position:'absolute', zIndex:'999', top:'84%', right:'88%'}}>
                <Flex mt='5'>
                    <Link to='/addEvent'>
                        <PlusSquareIcon ml='20' bg='#F9FB03' p='0' color='#0327D6' h='70' w='70' />
                    </Link>
                </Flex>
            </Box>

            <GMap height={height} width={width} setEvent={setEvent} setActiveBoxData={setActiveBoxData}/>
        </Box>    
  
    )
}

export default MapContainer