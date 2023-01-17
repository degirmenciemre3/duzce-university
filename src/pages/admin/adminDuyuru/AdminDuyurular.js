import { Box, Button, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {  AdminDuyuruApiDelete } from "../../../components/apis/api";



const AdminDuyurular = ({title,description,date,id,key,category}) => {

    const navigate = useNavigate();


const handelDelete = (id) => {
  console.log(id,typeof(id));
    axios.request({

        method: "DELETE",
        url: `${AdminDuyuruApiDelete}?id=${id}`,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    }).then((response) => {
        console.log(response);
        if (response.status === 200) {
            alert("Başarılı");
            //REFRESH
            window.location.reload();
        }
        else {
            alert("Başarısız");
        }
    }
    ).catch((error) => {
        console.log(error);
    }
    );
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
