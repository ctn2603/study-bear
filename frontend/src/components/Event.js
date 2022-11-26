import { Box, Text, Flex, Center, HStack } from "@chakra-ui/react";
import { Link } from 'react-router-dom'
const Event = ({ item }) => {
  return (
    <Center>
      <Box margin={10} h="17vh" w="85%" bg="#ccb4b4" borderRadius="15px">
        <Text textAlign="left" marginLeft={15} fontFamily="Arial">
          {item.title}
        </Text>
        <Text textAlign="left" marginLeft={15} fontFamily="Arial">
          {item.time}
        </Text>
        <Text textAlign="left" marginLeft={15} mb='0' fontFamily="Arial">
          {item.location}
        </Text>
        <Link to='/eventData'><Text textAlign='left' m='10' mt='3'>More Info</Text></Link>
      </Box>
    </Center>
  );
};
export default Event;
