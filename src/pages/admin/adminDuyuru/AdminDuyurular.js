import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AdminDuyuruApi } from "../../../components/apis/api";



const AdminDuyurular = ({title,description,date,id,key,category}) => {

    const navigate = useNavigate();


const handelDelete = (id) => {
    fetch(`${AdminDuyuruApi}/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        alert("Duyuru Silindi");
        window.location.reload()
      }
    });
  };


  return (
    <Flex
        key={key}
      bg={"twitter.400"}
      borderRadius="8"
      w="100%"
      justifyContent={"space-between"}
      alignItems={"center"}
      p={5}
      gap={3}
    >
      <Box
        border={"2px"}
        borderColor="whiteAlpha.400"
        borderRadius="8"
        w="100%"
      >
        <Flex flex={1} flexDirection="column" gap={2} m={2}>
          <Text>
            <strong>Title:</strong>
            {title}
          </Text>
          <Text>
            <strong>Description:</strong>
            {description}
          </Text>
          <Text>
            <strong>category:</strong>
            {category}
          </Text>
          <Text>
            <strong>Date:</strong>
            {date}
          </Text>
          

        </Flex>
      </Box>
      <Box
        border={"2px"}
        borderColor="whiteAlpha.400"
        borderRadius="8"
        h={"100%"}
      >
        <Flex flexDirection="column" gap={2} m={5}>
          <Button 
           onClick={()=>handelDelete(id)}
          bg={"red.400"} color="white" _hover={{ bg: "red.500" }}>
            Sil
          </Button>
          <Button 
           onClick={() => navigate(`/admin/duyuru/guncelle/${id}`)}
          bg={"green.400"} color="white" _hover={{ bg: "green.500" }}>
            Güncelle
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AdminDuyurular;
