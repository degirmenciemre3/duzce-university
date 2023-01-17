import { ArrowBackIcon } from '@chakra-ui/icons';
import { Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminHeader = ({title}) => {
    const navigate = useNavigate();
  return <Grid>
  <Flex h={50} bg="twitter.300" align="center" justify="center">
    <Text fontSize="2xl" fontWeight="bold" color="white">
      {title}
    </Text>
  </Flex>
  <Flex
    position="absolute"
    top="2.5"
    left="5"
    align="center"
    justify="center"
    borderRadius="8"
   
  >
    <ArrowBackIcon
      width="30"
      height="30"
      color="white"
      size="50"
      onClick={() => {
        navigate(-1);
      }}
      _hover={{ cursor: "pointer" ,color:"gray.500"}}
    />
  </Flex>
</Grid>
}

export default AdminHeader