import React, { Component } from "react";
import NavbarExample from '../components/Navbar'
import MapContainer from '../components/MapContainer'
import EventData from '../components/eventData'
import GMap from '../components/GoogleMap'
import butt from '../images/plusButton.png'
import { Flex, Text, Box, Image, Spacer} from '@chakra-ui/react'

/*
    TODO:
        add stle to title
        fix navbar
        optimize map
*/
function HomePage() {

    return (
        <Box bg='#FAF9F6' h='100vh'>
            <NavbarExample />

            <Text fontSize='30px' m='10'>Welcome to Cal StudyBear!</Text>
            <Text fontSize='15px' p='0'>find study groups in Berkeley right now</Text>

            <Flex justifyContent='center'>

                <MapContainer height='70vh' width='48vw'/>
            

                {/* EventData is a placeholder for EventContainer
                    This Component will change when switching between:

                    -showing list of events
                    -showing Individual event data
                    -component for creating an event
                    -probably more to come

                    *important note: make sure the above components follow the same
                    height/width parameters, which are passed in as props like below.
                */}

                <EventData height='70vh' width='48vw'/>
            </Flex>
            

            <Flex width='20vw' justifyContent='center'>
                <Image src={butt} alt='button' p='15' pl='20' h='60px'/>
                <Spacer />
            </Flex>
            
        </Box>
    )
}

export default HomePage