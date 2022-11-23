import { Box, Text, Flex, Center, Spacer} from '@chakra-ui/react'
/* 
    TODO:
        make this more resizable

*/
const shadowStyle = {
    'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}
function EventData({height, width}) {
    const data = {
        title:'CS 70 Study Group',
        time: 'now - 8:00PM',
        capacity: '5/10',
        description: 'studying for midterm tmrw',
        location: 'Mainstacks Level C'

    }
    return ( 
        <Box ml='15' h={height} w={width}>
            <Flex w='100%'>
                <Flex flexDirection='column' m='0' w='46%' pl='10' pr='15'>
                    <Box h='50%' w='95%' bg='#948585' borderRadius='20px' style={shadowStyle}>

                        <Text textAlign='center'fontSize='17px' fontFamily='Arial'>
                            {data.title}
                        </Text>

                        <Box h='5%' ml='10' mb='2' fontSize='14px' fontFamily='Arial'>{data.time}</Box>
                        <Box h='5%' ml='10' mb='2' mt='1' fontSize='14px' fontFamily='Arial'>{data.capacity}</Box>
                        <Box h='5%' ml='10' mt='2' mb='5' fontSize='14px' fontFamily='Arial'>{data.location}</Box>

                        
                        <Box margin='auto' h='50%' w='85%' bg='#ccb4b4' borderRadius='15px'  >
                            <Text p='10' mt='4' fontFamily='Arial'>{data.description}</Text>
                        </Box>
                       
                        

                    </Box>

                    <Flex mt='13' mb='8' pt='10' pb='10' w='95%'>
                        <Box bg='#e6a3a3' w='46%' borderRadius='10' style={shadowStyle}>
                            <Text m='13' alignSelf='center'>I'm Going!</Text>
                        </Box>
                        <Spacer />
                        <Box bg='#8a5757' w='46%'  borderRadius='10' style={shadowStyle}>
                            <Text m='13' alignSelf='center'>Back</Text>
                        </Box>
                    </Flex>

                    <Box w='93%' h='40%' mt='20' m='5' bg='#948585' borderRadius='20px' style={shadowStyle}>
                        <Text p='10'>More Info</Text>
                    </Box>

                </Flex>

                <Box ml='0' w='46%' h='70vh' bg = '#948585' borderRadius='20' style={shadowStyle}>
                    <Text m='20'>Group Chat</Text>
                </Box>
            </Flex>

        </Box>
    )
}

export default EventData