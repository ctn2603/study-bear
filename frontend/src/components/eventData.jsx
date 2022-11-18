import { Box, Text, Flex, Center} from '@chakra-ui/react'

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
                <Flex flexDirection='column' m='0' w='50%'>
                    <Box h='35vh' w='95%' bg='#948585' borderRadius='20px'>

                        <Text textAlign='center'fontSize='17px' fontFamily='Arial'>
                            {data.title}
                        </Text>

                        <Text ml='10' mb='0' fontSize='14px' fontFamily='Arial'>{data.time}</Text>
                        <Text ml='10' mb='0' mt='1' fontSize='14px' fontFamily='Arial'>{data.capacity}</Text>
                        <Text ml='10' mt='0' fontSize='14px' fontFamily='Arial'>{data.location}</Text>

                        <Center>
                            <Box h='17vh' w='85%' bg='#ccb4b4' borderRadius='15px' >
                            <Text p='10' mt='4' fontFamily='Arial'>{data.description}</Text>
                            </Box>
                        </Center>
                        

                    </Box>

                    <Flex mt='13' mb='8'>
                        <Box bg='#e6a3a3' w='90%' mr='5' ml='10' borderRadius='10'>
                            <Text m='13' alignSelf='center'>I'm Going!</Text>
                        </Box>

                        <Box bg='#8a5757' w='90%' mr='12' ml='10' borderRadius='10'>
                            <Text m='13' alignSelf='center'>Back</Text>
                        </Box>
                    </Flex>

                    <Box w='93%' h='26vh' mt='20' m='5' bg='#948585' borderRadius='20px'>
                        <Text p='10'>More Info</Text>
                    </Box>

                </Flex>

                <Box ml='0' w='50%' h='70vh' bg = '#948585' borderRadius='20'>
                    <Text m='20'>Group Chat</Text>

                </Box>
            </Flex>

        </Box>
    )
}

export default EventData