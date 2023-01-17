import { Box, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdminSirketler } from "../../../components/apis/api";
import Loading from "../../../components/loading/Loading";
import AdminHeader from "../admin-header/AdminHeader";

const SirketDetay = () => {
  const { id } = useParams();
  const [sirket, setSirket] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${AdminSirketler}/${id}`).then((res) => {
      setSirket(res.data);
      setLoading(false);
    });
  }, [id]);

  console.log(sirket);
  return (
    <>
      <AdminHeader title={"Şirket Detay"} />
      {loading ? (
        <Loading />
      ) : (
        <Flex
          bg={"white"}
          borderRadius="8"
          h="100%"
          flexDirection={"column"}
          p={5}
          margin={5}
          border="1px"
          borderColor="gray.200"
          gap={5}
        >
          <Box
            bg={"white"}
            borderRadius="8"
            h="200px"
            padding={5}
            border="1px"
            borderColor="twitter.200"
            flexDirection={"column"}
          
          >
             <Flex
                flexDirection={"column"}
                gap={10}
                justifyContent={"center"}
                alignItems={"center"}
                
             >
             <Text>
                  Şirket Adı: 
                  <strong> {sirket.sirketAdi}</strong>
                </Text>
                <Text>
                  Şirket Detayı: 
                  <strong> {sirket.sirketDetay}</strong>
                </Text>
                <Text>
                  Şirket Kaç Stajyer Alacak:
                  <strong>
                    {sirket.stajyerDurum === false?"Stajyer Almıyor":"Stajyer Alıyor"}
                  </strong>
                </Text>
             </Flex>
          </Box>
          <Box
            bg={"white"}
            borderRadius="8"
            h="200px"
            padding={5}
            border="1px"
            borderColor="twitter.200"
          >
            {sirket.stajyerDurum === false ? (
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="red.500"
                textAlign="center"
              >
                Şirketin staj durumu aktif değil.
              </Text>
            ) : (
              <Flex
                flexDirection={"column"}
                gap={10}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>
                  Şirketin Aradığı Bölüm:
                  <strong> {sirket.staj.bolum}</strong>
                </Text>
                <Text>
                  Şirketin Aradığı Alan:
                  <strong> {sirket.staj.alan}</strong>
                </Text>
                <Text>
                  Şirket Kaç Stajyer Alacak:
                  <strong> {sirket.staj.kacKisi}</strong>
                </Text>
              </Flex>
            )}
          </Box>
        </Flex>
      )}
    </>
  );
};

export default SirketDetay;
