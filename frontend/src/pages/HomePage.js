import React, { Component } from "react";
import { Link } from 'react-router-dom'
import NavbarExample from '../components/Navbar'
import MapContainer from '../components/MapContainer'
import EventData from '../components/eventData'
import GMap from '../components/GoogleMap'
import { Flex, Text, Box, Image } from '@chakra-ui/react'
import EventContainer from "../components/eventContainer";
import {Outlet} from 'react-router-dom'
import { PlusSquareIcon } from '@chakra-ui/icons'
import circleIcon from '../images/circle.png'

/*
    TODO:
        add stle to title
        fix navbar
        optimize map
*/
function HomePage({height, width}) {

    return (
        <Box bg='#FAF9F6' h='90vh' fontFamily='Futura'>
            <Flex justify='space-between'>
                <Flex direction='column' mb='20' ml='13' pt='19'>
                    <Box ml='9vw' mb='0' pb='0' textAlign='left'>
                        <Text mb='0' pb='0' fontSize='40px' mt='10' p='0' color='#0327D6' style={{'font-weight': 'bold'}}>Welcome To</Text>
                    </Box>
                    <Flex ml='9vw' mt='0' pt='0'>
                        <Text mt='0' pt='0' fontSize='40px' color='#0327D6' style={{'font-weight': 'bold'}}>Study</Text>
                        <Text fontSize='40px' color='#429AFD' style={{'font-weight': 'bold'}}>Bear</Text>
                    </Flex>
                </Flex>

                <Flex mr='9vw' ml='60'>
                    <Image h='18vh' p='0' m='0' mt='15' mr='35' src={circleIcon}/>
                    <Box  h='19vh' maxW='10vw' mt='35' ml='90' textAlign='right' style={{'line-height': '14pt'}}>
                        a website designed to help Berkeley students find
                        study groups around campus
                    </Box>
                </Flex>
            </Flex>

            <Flex justify='center'>

                <Flex direction='column'>
                    <MapContainer height='60vh' width='45vw'/>
                </Flex>

                {/* EventData is a placeholder for EventContainer
                    This Component will change when switching between:

                    -showing list of events
                    -showing Individual event data
                    -component for creating an event
                    -probably more to come

                    *important note: make sure the above components follow the same
                    height/width parameters, which are passed in as props like below.
                */}
                <Outlet />
            </Flex>

            
        </Box>
    )
}

export default HomePage