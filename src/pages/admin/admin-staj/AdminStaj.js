import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import AdminHeader from "../admin-header/AdminHeader";
import AdminStajCard from "./AdminStajCard";

const AdminStaj = () => {
  return (
    <>
      <AdminHeader title={"Staj Kontrol Paneli"} />
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
                  placeholder="Staj Ara"
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
          </Flex>
        </Box>
        <Box bg="white" marginTop={5}>
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
            <AdminStajCard />
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default AdminStaj;
