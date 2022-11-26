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
function HomePage() {

    return (
        <Box bg='#326da8' h='100vh'>

            <Text fontSize='30px'>Welcome to StudyBear!</Text>

            <Flex justifyContent='center'>

                <MapContainer height='75vh' width='48vw'/>
            

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
                    <PlusSquareIcon ml='10' color='white' h='70' w='70' />
                </Link>
                <Box color='white'>{'<-- add an event!'}</Box>
            </Flex>

            
        </Box>
    )
}

export default HomePage