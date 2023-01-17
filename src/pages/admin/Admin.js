import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import { AccountLogout } from "../../components/apis/api";
import AdminSirket from "./admin-sirket/AdminSirket";
import AdminStaj from "./admin-staj/AdminStaj";
import AdminDuyuru from "./adminDuyuru/AdminDuyuru";
import AdminOgrenci from "./adminOgrenci/AdminOgrenci";
import AdminYayin from "./adminYayin/AdminYayin";

const Admin = () => {
  const [adminText, setAdminText] = useState("Duyuru");
  const navigate=useNavigate();

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
      name: "Şirketler",
      link: "/admin/sirket",
    },
    {
      id: 5,
      name: "Stajlar",
      link: "/admin/staj",
    }
   

  ];

  const admin = {userName: 'Admin', password: 'Secret123$', returnUrl: ''}
  

  const handleClick=()=>{
    axios.post(AccountLogout, admin).then((response) => {
      console.log(response);
      //navigate("/login")
    })
  
  }
  return (
    <>
    {
      localStorage.getItem("token")===null ? navigate("/ErrorPage") :

 
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
              margin={"10px"}
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
          <Button
            colorScheme="blue"
            variant="outline"
            margin={5}
            w="45%"
            h="45px"
            boxShadow="lg"
            _hover={{
              backgroundColor: "blue.200",
              color: "#434242",
              cursor: "pointer",
            }}
            fontSize={"xl"}
            fontWeight={"bold"}
            textAlign={"center"}
            onClick={handleClick}
          >
            Çıkış Yap
          </Button>




        </Box>

        <Box 
          m={"10px"}
          w={"100%"}
        >
          {adminText === "Duyuru" ? (
            <AdminDuyuru />
          ) : adminText === "Yayın" ? (
            <AdminYayin />
          ) : adminText === "Ogrenci" ? (
            <AdminOgrenci />
          ) : adminText === "Şirketler" ? (
            <AdminSirket />
          ) : adminText === "Stajlar" ? (
            <AdminStaj />
          ) : null
          }
        </Box>
      </Flex>
         }
    </>
  );
};

export default Admin;
