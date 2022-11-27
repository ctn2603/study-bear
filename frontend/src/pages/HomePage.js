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
        <Box bg='#FAF9F6' h='90vh'>

            <Text fontSize='30px' mt='10' p='0' mb='0'>Welcome to StudyBear!</Text>
            <Text fontSize='15px' p='0' mt='0' mb='30'>Find Study Groups in Cal NOW!</Text>

            <Flex justifyContent='center'>

                <Flex direction='column'>
                    <MapContainer height='65vh' width='45vw'/>
                    <Box>
                        <Flex mt='5'>
                            <Link to='/addEvent'>
                                <PlusSquareIcon ml='30' color='black' h='70' w='70' />
                            </Link>
                            <Box textAlign='center' mt='20' color='black'>{'<-- add an event!'}</Box>
                        </Flex>
                    </Box>
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