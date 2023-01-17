import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../admin-header/AdminHeader";
import AdminSirketCard from "./AdminSirketCard";

const AdminSirket = () => {
  const navigate = useNavigate();
  return (
    <>
      <AdminHeader title={"Şirket Kontrol Paneli"} />
      <Flex
        flexDirection="column"
        margin={10}
        padding="40px"
        gap="8px"
        className="sirket"
        borderWidth={1}
        borderRadius={8}
        borderColor="gray.200"
        bg="white"
      >
        <Box
          border={1}
          borderRadius={8}
          borderColor="blue.200"
          bg="blue.100"
          padding={5}
        >
          <Flex flexDirection="row" justifyContent="space-between">
            <Box>
              <InputGroup>
                <InputRightElement
                  pointerEvents="none"
                  children={<SearchIcon color="blue.600" />}
                />
                <Input
                  placeholder="Şirket Ara"
                  color={"blue.600"}
                  _placeholder={{ opacity: 1, color: "gray.800" }}
                  fontWeight="bold"
                  size="lg"
                  w="300px"
                  h="10"
                  bg="blue.100"
                  border="2px"
                  borderColor="blue.200"
                  borderRadius="8"
                />
              </InputGroup>
            </Box>
            <Box>
              <Button
                leftIcon={<AddIcon />}
                width="200px"
                height="50px"
                colorScheme="outline"
                border="2px"
                borderColor="blue.600"
                color={"blue.600"}
                borderRadius="8"
                variant="solid"
                _hover={{ bg: "blue.600", color: "white" }}
                onClick={() => navigate("/admin/sirket/ekle")}
              >
                Şirket Ekle
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box
          justifyContent={"space-between"}
          bg="white"
          marginTop={5}
        >
          <Flex
            flexDirection="row"
            color="gray.800"
            borderWidth={1}
            borderRadius={8}
            borderColor="gray.200"
            width="100%"
            maxHeight="700px"
            overflowY="scroll"
            padding={5}
          >
            <AdminSirketCard/>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default AdminSirket;
