import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const AdminYayinlar = ({title,description,date,id,key,category}) => {

    const navigate = useNavigate();

  return (
    <Flex
        key={key}
      bg={"facebook.400"}
      borderRadius="8"
      w="100%"
      justifyContent={"space-between"}
      alignItems={"center"}
      p={5}
      gap={3}
    >
      <Box
        border={"2px"}
        borderColor="whiteAlpha.800"
        borderRadius="8"
        w="100%"
      >
        <Flex
        color={"white"}
        flex={1} flexDirection="column" gap={2} m={2}>
          <Text>
            <strong style={{marginRight:"5px"}}>Title:</strong>
            {title}
          </Text>
          <Text>
            <strong style={{marginRight:"5px"}}>Description:</strong>
            {description}
          </Text>
          <Text>
            <strong style={{marginRight:"5px"}}>category:</strong>
            {category}
          </Text>
          <Text>
            <strong style={{marginRight:"5px"}}>Date:</strong>
            {date}
          </Text>
          

        </Flex>
      </Box>
      <Box
        border={"2px"}
        borderColor="whiteAlpha.800"
        borderRadius="8"
        h={"100%"}
      >
        <Flex flexDirection="column" gap={2} m={5}>
          <Button 
           
          bg={"red.400"} color="white" _hover={{ bg: "red.500" }}>
            Sil
          </Button>
          <Button 
           onClick={() => navigate(`/admin/yayin/guncelle/${id}`)}
          bg={"green.400"} color="white" _hover={{ bg: "green.500" }}>
            Güncelle
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}

export default AdminYayinlar