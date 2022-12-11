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
import { AdminYayinApi } from "../../../components/apis/api";
import Loading from "../../../components/loading/Loading";
import AdminHeader from "../admin-header/AdminHeader";
import AdminYayinlar from "./AdminYayinlar";


const AdminYayin = () => {
  const navigate = useNavigate();
  const [yayinlar, setYayinlar] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(AdminYayinApi).then((res) => {
      setYayinlar(res.data);
      setLoading(false);
    });
  }, []);
  //console.log(yayinlar);

  return (
    <Grid gap={6} mx="auto">
      <AdminHeader title={"Admin Yayın"} />
      <Grid m={5} gap={3}>

        <Flex
          bg={"facebook.500"}
          borderRadius="8"
          w="100%"
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
                placeholder="Yayın Ara"
                color={"white"}
                _placeholder={{ opacity: 1, color: "white" }}
                fontWeight="bold"
                size="lg"
                w="300px"
                h="10"
                bg="facebook.500"
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
              onClick={() => navigate("/admin/yayin/ekle")}
            >
              Yayın Ekle
            </Button>
          </Box>
        </Flex>
        {
          loading ? <Loading /> : yayinlar.map((yayin, index) => (
            <Flex>
              <Flex
                key={yayin.id}
                marginRight={2}

                bg={"twitter.400"}
                borderRadius="8"
                w="20%"
                justifyContent={"space-between"}
                alignItems={"center"}
                p={5}
                backgroundImage={yayin.imgUrl}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"

              >


              </Flex>
              <AdminYayinlar
                title={yayin.title}
                description={yayin.description}
                date={yayin.date}

                id={yayin.id}
                key={index}
                category={yayin.category}

              />
            </Flex>
          ))
        }

      </Grid>
    </Grid>
  )
}

export default AdminYayin