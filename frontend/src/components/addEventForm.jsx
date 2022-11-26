import { useState } from 'react'
import { Box, Flex, Input } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

function AddEventForm({height, width}) {
    const [buildEvent, setBuild] = useState({})

    const updateBuild = (e, attr) => {
        buildEvent[attr] = e.target.value
        setBuild(buildEvent)
        console.log(buildEvent)
    }
    return (
        <Box h={height} w={width} bg='white'>
            <Flex>
                <Box> Title: </Box>
                <Input variant='outline' placeholder='title' onInput={
                    (e) => updateBuild(e, 'title')
                }/>
            </Flex>
            <Flex>
                <Box> Time: </Box>
                <Input variant='outline' placeholder='time' onInput={
                    (e) => updateBuild(e, 'time')
                }/>
            </Flex>
            <Flex>
                <Box> Capacity </Box>
                <Input variant='outline' placeholder='capacity' onInput={
                    (e) => updateBuild(e, 'capacity')
                }/>

                <Box>Major</Box>
                <Input variant='outline' placeholder='major' onInput={
                    (e) => updateBuild(e, 'major')
                }/>
            </Flex>


            <Box>Description</Box>
            <Input variant='outline' placeholder='description' onInput={
                    (e) => updateBuild(e, 'description')
                }/>
            
            <Box>Click on Map to Select Location</Box>
            <Flex>
                <Box>Selected</Box>
                <CheckIcon />
                <input type='submit'/>
            </Flex>
        </Box>
    )
}

export default AddEventForm