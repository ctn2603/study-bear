import { Box, Text, Flex, Center, Button, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StateContext } from '../App'
import studying1 from '../images/studying1.png'
import studying2 from '../images/studying2.png'
import studying3 from '../images/studying3.png'
import studying4 from '../images/studying4.png'
import '../css/EventData.css'
/* 
    TODO:
        make this more resizable

*/
function EventData({height, width}) {

    const events = useContext(StateContext).state.events
    const data = events[useContext(StateContext).state.eventDataId]
    
    return (
        <Flex h={height} w={width} direction='column' ml='30'>
            <Box w='100%' h='55%' bg='#0E26CD' color='white' size={{'font-weight': 'bold'}} fontFamily='Futura' fontSize='24'>
                <Text p='10'> {data.title} </Text>

                <Box textAlign='left' m='30' mb='25'>
                    <Box fontSize='12'>now - {data.time}</Box>
                    <Box fontSize='12'>{data.location}</Box>
                    <Box fontSize='12'>Spots Open: {data.currCap} / {data.capacity}</Box> 
                    <Box fontSize='12'>Major: {data.major}</Box>
                </Box>

                <Box w='90%' h='40%' bg='white' ml='23' align='left' color='black'>
                    <Text fontSize='12px' p='8px' pb='0' mb='5'>Desciption:</Text>
                    <Text fontSize='12px' ml='23' mt='0' pt='0'> {data.description} </Text>
                </Box>
            </Box>

            <Box w='100%' h='15%' bg='#F9FB03' mt='20' fontSize='12px' textAlign='left'>
                <Text p='10' pl='15'>More Info:</Text>
            </Box>

            <Flex w='100%' mt='20'>
                <Box h='50' w='50%' style={{border: '1px solid #0E26CD'}}><Text mt='8'>I'm Going</Text></Box>
                <Text h='50' ml='5' w='48%' bg='#0E26CD'><Link to='/' style={{textDecoration:'none'}}><Text mt='8' color='white'>Back</Text></Link></Text>
            </Flex>
        </Flex>
    )
}

export default EventData