import React, { Component } from "react";
import { Link } from 'react-router-dom'
import NavbarExample from '../components/Navbar'
import MapContainer from '../components/MapContainer'
import EventData from '../components/eventData'
import GMap from '../components/GoogleMap'
import { Flex, Text, Box } from '@chakra-ui/react'
import EventContainer from "../components/eventContainer";
import {Outlet} from 'react-router-dom'
import { PlusSquareIcon } from '@chakra-ui/icons'

/*
    TODO:
        add stle to title
        fix navbar
        optimize map
*/
function HomePage({height, width}) {

    return (
        <Box bg='#FAF9F6' h='100vh'>

            <Text fontSize='30px' m='10'>Welcome to StudyBear!</Text>

            <Flex justifyContent='center'>

                <MapContainer height='75vh' width='45vw'/>
            

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
            
            <Flex align='center'>
                <Link to='/addEvent'>
                    <PlusSquareIcon ml='30' color='#0A2463' h='70' w='70' />
                </Link>
                <Box color='white'>{'<-- add an event!'}</Box>
            </Flex>

            
        </Box>
    )
}

export default HomePage