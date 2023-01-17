import { AddIcon, SearchIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AdminOgrenciApi } from '../../../components/apis/api'
import Loading from '../../../components/loading/Loading'
import AdminHeader from '../admin-header/AdminHeader'
import OgrenciBilgileri from './OgrenciBilgileri'

const AdminOgrenci = () => {
  const navigate = useNavigate()

  const [ogrenci, setOgrenci] = useState([])
  const [loading, setLoading] = useState(true);
  const [ogrenciId, setOgrenciId] = useState();

  useEffect(() => {
    axios.get(AdminOgrenciApi).then((res) => {
      setOgrenci(res.data);
      setLoading(false);

    });
  }, []);

  return (
    <>
      <AdminHeader title={"Öğrenci Kontrol Paneli"} />
      <Flex
        flexDirection="column"
        margin={10}
        padding="40px"
        gap="8px"
        className="duyuru"
        borderWidth={1}
        borderRadius={8}
        borderColor="gray.200"
        bg="white" >
        <Box
          fontWeight="bold"
          fontSize="2xl"
          color="gray.800"
        >
          <Flex
            flexDirection={"row"}
            justifyContent={"space-between"}
            borderWidth={1}
            borderRadius={8}
            borderColor="blue.200"
            bg="blue.100"
            padding={5}
          >
            <Box>
              <InputGroup>
                <InputRightElement
                  pointerEvents="none"
                  children={<SearchIcon color="blue.600" />}
                />
                <Input
                  placeholder="Öğrenci Ara"
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
                onClick={() => navigate("/admin/ogrenci/ekle")}
              >
                Öğrenci Ekle
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex
            flexDirection={"row"}
            justifyContent={"space-between"}
            borderWidth={1}
            borderRadius={8}
            borderColor="gray.200"
            bg="white"
            padding={5}
            gap="15px"
          >
            <Box
              fontWeight="bold"
              color="gray.800"
              borderWidth={1}
              borderRadius={8}
              borderColor="gray.200"
              width="100%"
              maxHeight="700px"
              overflowY="scroll"
              padding={5}

            >
              {
                loading ? <Loading/>:
                  ogrenci.map((ogrenci) => (
                    <Box
                      bg={ogrenciId === ogrenci.id ? "blue.100" : "white"}
                      key={ogrenci.id}
                      borderWidth={1}
                      borderRadius={8}
                      borderColor="blackAlpha.400"
                      padding={5}
                      width="100%"
                      height="150px"
                      onClick={() => setOgrenciId(ogrenci.id)}
                      marginTop={2}

                    >
                      <Flex
                        flexDirection={"row"}

                      >
                        <Avatar

                          size="md"
                          name={ogrenci.name}
                          src={ogrenci.ProfileImage}
                          marginRight={5}
                        />
                        <Box>
                          <Text
                            fontWeight="bold"
                            fontSize="md"
                            color="gray.800"
                          >
                            {ogrenci.name} {ogrenci.lastname}
                          </Text>
                          <Text
                            fontWeight="normal"
                            fontSize="sm"
                            color="gray.800"
                            noOfLines={1}
                          >
                            {ogrenci.bolum}
                          </Text>
                        </Box>


                      </Flex>
                      <Flex
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                        marginTop={2}
                      >
                        <Box>
                          <Text
                            fontWeight={"normal"}
                            fontSize="sm"
                            maxWidth={"150px"}
                          >
                            mezunDate: {ogrenci.mezunDate}
                          </Text>
                        </Box>
                        <Box
                          marginLeft={5}
                        >
                          <Text
                            fontWeight={"normal"}
                            fontSize="sm"
                          >
                            stajDurumu : {ogrenci.stajDurumu === true ? "Staj Yapmış" : "Staj Yapmamış"}
                          </Text>
                        </Box>

                      </Flex>

                    </Box>

                  ))
              }
            </Box>
            <Box
              fontWeight="bold"
              color="blue.800"
              borderWidth={1}
              borderRadius={8}
              borderColor="gray.200"
              padding={5}
              width="100%"
              height="100%"
            >
              <OgrenciBilgileri
                ogrenciId={ogrenciId}
              />
            </Box>
          </Flex>

        </Box>
      </Flex>

    </>
  )
}

export default AdminOgrenci