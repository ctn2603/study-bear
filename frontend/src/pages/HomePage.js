import React, { Component } from "react";
import NavbarExample from '../components/Navbar'
import MapContainer from '../components/mapGoogle'
import EventData from '../components/eventData'
import { Flex, Text, Box } from '@chakra-ui/react'
/*
    TODO:
        add stle to title
        fix navbar
        optimize map
*/
function HomePage() {

    return (
        <Box bg='#326da8' h='100vh'>
            <NavbarExample />

            <Text fontSize='30px'>Welcome to StudyBear!</Text>

            <Flex justifyContent='center'>
                <MapContainer height='75vh' width='50%'/>

                {/* EventData is a placeholder for EventContainer*/}
                <EventData height='75vh' width='30%'/>
            </Flex>
            
        </Box>
    )
}

export default HomePage