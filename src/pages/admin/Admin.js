import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import AdminDuyuru from "./adminDuyuru/AdminDuyuru";
import AdminOgrenci from "./adminOgrenci/AdminOgrenci";
import AdminYayin from "./adminYayin/AdminYayin";

const Admin = () => {
  const [adminText, setAdminText] = useState("Duyuru");

  const adminYonlendir = [
    {
      id: 1,
      name: "Duyuru",
      link: "/admin/duyuru",
    },
    {
      id: 2,
      name: "Yayın",
      link: "/admin/yayin",
    },
    {
      id: 3,
      name: "Ogrenci",
      link: "/admin/ogrenci",
    },
    {
      id: 4,
      name: "Çıkış",
      link: "/login",
    },

  ];
  return (
    <>
      <Flex bg="blue.100" w={"100%"} h={"100vh"} display={"flex"}>
        <Box display={"row"} maxWidth={300} backgroundColor={"white"}>
          <Image
            src="https://pbs.twimg.com/profile_images/1576526462085210112/v_v093TD_400x400.jpg"
            alt="Duzce Universitesi"
          />

          {adminYonlendir.map((item) => (
            <Box
              key={item.id}
              borderRadius="8"
              margin={"15px"}
              w="90%"
              h="90px"
              bg={adminText === item.name ? "blue.200" : "white"}
              onClick={() => setAdminText(item.name)}
              boxShadow="lg"
              _hover={{
                backgroundColor: "blue.200",
                color: "#434242",
                cursor: "pointer",
              }}
            >
              <Text fontSize={"3xl"} fontWeight={"bold"} textAlign={"center"}>
                {item.name}
              </Text>
            </Box>
          ))}



        </Box>

        <Box m={5}
          w={"100%"}
        >
          {adminText === "Duyuru" ? (
            <AdminDuyuru />
          ) : adminText === "Yayın" ? (
            <AdminYayin />
          ) : adminText === "Ogrenci" ? (
            <AdminOgrenci />
          ) : null}
        </Box>
      </Flex>
    </>
  );
};

export default Admin;
