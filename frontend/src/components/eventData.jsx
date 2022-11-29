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
    console.log(data)
    return ( 
        <Box ml='15' h={height} w={width}>
            <Flex w='100%'>
                <Flex flexDirection='column' m='0' w='50%'>
                    <Box h='35vh' w='95%' bg='#948585' mb='15' borderRadius='20px' className='boxShadow'>

                        <Text mt='15' mb='10' textAlign='center'fontSize='17px' fontFamily='Arial'>
                            {data.title}
                        </Text>

                        <Text ml='10' mb='0' fontSize='14px' fontFamily='Arial'>{'time: ' + data.time}</Text>
                        <Text ml='10' mb='0' mt='1' fontSize='14px' fontFamily='Arial'>{'capacity: ' + data.capacity}</Text>
                        <Text ml='10' mt='0' fontSize='14px' fontFamily='Arial'>{'location: ' + data.location}</Text>

                        <Center>
                            <Box h='17vh' w='85%' bg='#ccb4b4' borderRadius='15px' >
                            <Text p='10' mt='4' fontFamily='Arial'>{data.description}</Text>
                            </Box>
                        </Center>
                        

                    </Box>

                    <Box w='93%' h='24vh' mt='20' m='5' bg='#948585' borderRadius='20px' className='boxShadow'>
                        <Text p='10' mb='0'>More Info</Text>
                        <Text mt='0' p='10'>We are at the big table at the corner of the room. Don't be shy!</Text>
                    </Box>

                    <Flex mt='13' mb='8' align='center'>
                        <Button w='46%' border='0' p='10' borderRadius='10' bg='#BAD9B5' className='boxShadow'>
                            I'm Going
                        </Button>
                    

                        <Link to='/' style={{width:'46%', textDecoration:'none'}}>
                            <Button w='100%' border='0' p='10' ml='10' borderRadius='10' bg='#732C2C' className='boxShadow'>
                                Back
                            </Button>
                        </Link>
    
                    </Flex>


                </Flex>

                <Box ml='0' w='50%' h='70vh' bg = '#948585' borderRadius='20' className='boxShadow'>
                    <Text m='20' mb='12'>Images</Text>
                    <Box h='85%' className='picScroll' style={{overflow:'auto'}}>
                        <Box>
                            <Image w='90%' mb='8' src={studying2} />
                        </Box>  
                        <Box>
                            <Image w='90%' mt='8' mb='8' src={studying4} />
                        </Box>
                        <Box>
                            <Image w='90%' mt='8' mb='8'src={studying3} />
                        </Box>
                        <Box>
                            <Image w='90%' mt='8' src={studying1} />
                        </Box>
                        
                    </Box>

                </Box>
            </Flex>

        </Box>
    )
}

export default EventData