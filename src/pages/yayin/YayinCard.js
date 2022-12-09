import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const YayinCard = ({index,imgUrl,name,desc,category}) => {
  return   <Flex
  key={index}
    flexDirection="column"
    backgroundColor="white"
    borderRadius="8px"
    boxShadow="0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
  >
    <Image
      height="180px"
      objectFit="cover"
      src={imgUrl}
      alt="Event description"
      borderTopLeftRadius="8px"
      borderTopRightRadius="8px"
    />
    <Flex flexDirection="column" padding="24px" gap="16px">
      <Flex gap="8px" flexDirection="column">
        <Flex
          background="purple.50"
          width="fit-content"
          padding="8px"
          borderRadius="full"
        >
          <Text
            fontSize="14px"
            fontWeight="bold"
            color="purple.500"
          >
            {category}
          </Text>
        </Flex>
        <Flex flexDirection="column" gap="4px">
          <Text
            fontSize="24px"
            fontWeight="bold"
            color="gray.900"
          >
            {name}
          </Text>
          <Text fontSize="14px" color="gray.500" noOfLines={3}>
            {desc}
          </Text>
        </Flex>
      </Flex>

      <Flex flexDirection="column" gap="8px">
        <Button color="purple.500" backgroundColor="purple.50">
          More
        </Button>
      </Flex>
    </Flex>
  </Flex>
}

export default YayinCard