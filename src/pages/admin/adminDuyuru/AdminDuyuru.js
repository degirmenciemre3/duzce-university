import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Grid,
  Input,
  Button,
  Box,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminDuyuruApi } from "../../../components/apis/api";
//import { AdminDuyuruApi } from "../../../components/apis/api";
import Loading from "../../../components/loading/Loading";
import AdminHeader from "../admin-header/AdminHeader";
import AdminDuyurular from "./AdminDuyurular";
const AdminDuyuru = () => {
  const navigate = useNavigate();
  const [duyurular, setDuyurular] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(AdminDuyuruApi).then((res) => {
      setDuyurular(res.data);
      setLoading(false);
    });
  }, []);
  console.log(duyurular);

  return (
    <Grid gap={6} mx="auto">
      <AdminHeader title={"Admin Duyuru"} />
      <Grid m={5} gap={3}>
        <Flex
          bg={"twitter.500"}
          borderRadius="8"
          w="100%"
          h="100%"
          justifyContent={"space-between"}
          alignItems={"center"}
          p={5}
        >
          <Box>
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                placeholder="Duyuru Ara"
                color={"white"}
                _placeholder={{ opacity: 1, color: "white" }}
                fontWeight="bold"
                size="lg"
                w="300px"
                h="10"
                bg="twitter.500"
                border="2px"
                borderColor="whiteAlpha.400"
                borderRadius="8"
              />
            </InputGroup>
          </Box>

          <Box>
            <Button
              leftIcon={<AddIcon />}
              colorScheme="outline"
              border="2px"
              borderColor="whiteAlpha.400"
              borderRadius="8"
              variant="solid"
              _hover={{ bg: "whiteAlpha.400" }}
              onClick={() => navigate("/admin/duyuru/ekle")}
            >
              Duyuru Ekle
            </Button>
          </Box>
        </Flex>
        {loading ? (
          <Loading />
        ) : (
          duyurular.map((duyuru, index) => (
            <Flex>
              <Flex
                marginRight={2}
                key={index}
                bg={"twitter.400"}
                borderRadius="8"
                w="20%"
                justifyContent={"space-between"}
                alignItems={"center"}
                p={5}
                backgroundImage={duyuru.imgUrl}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                minW={100}
                minH={100}
              ></Flex>
              <AdminDuyurular
                title={duyuru.title}
                description={duyuru.description}
                date={duyuru.date}
                id={duyuru.id}
                key={index}
                category={duyuru.category}
              />
            </Flex>
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default AdminDuyuru;
