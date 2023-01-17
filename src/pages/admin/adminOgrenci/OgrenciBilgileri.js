import { Avatar, Box, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AdminOgrenciApi } from "../../../components/apis/api";

const OgrenciBilgileri = ({ ogrenciId }) => {
    const [ogrenci, setOgrenci] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`${AdminOgrenciApi}/${ogrenciId}`).then((res) => {
            setOgrenci(res.data);
            setLoading(false);
        });
    }, [ogrenciId]);
    console.log(ogrenci);
    return (
        <>
            {loading ? (
                <Text fontWeight="bold" fontSize="2xl" color="gray.800">
                    Öğrenci Detayını görmek için öğrenci seçiniz.
                </Text>
            ) : (
                <Card
                    margin={10}
                    maxW='md'>
                    <CardHeader>
                        <Flex spacing='4'>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar
                                    size='lg'
                                    name={ogrenci.name} src={ogrenci.ProfileImage} />

                                <Box>
                                    <Heading size='lg'>
                                        {ogrenci.name} {ogrenci.lastname}
                                    </Heading>
                                    <Text
                                        fontSize='md'
                                        color='gray.500'
                                    >
                                        Bölüm: {ogrenci.bolum}
                                    </Text>
                                </Box>
                            </Flex>

                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Text
                            fontSize='lg'

                        >
                            Email: {ogrenci.ogrenciMail}
                        </Text>
                        <Divider
                            my={4}

                        />
                        <Text
                            fontSize='lg'

                        >
                            Tecrübeler
                        </Text>
                        <Text
                            fontSize='md'
                            color='gray.800'
                            fontWeight={"normal"}
                            noOfLines={9}

                        >
                            {ogrenci.tecrube}
                        </Text>
                        <Divider
                            my={4}

                        />

                    </CardBody>


                    <CardFooter
                        justify='space-between'
                        flexWrap='wrap'
                        sx={{
                            '& > text': {
                                minW: '136px',
                            },
                        }}
                        alignContent='center'
                        textAlign={'center'}




                    >
                        <Text flex='1' variant='ghost' >
                            {ogrenci.stajdurumu === true ? "Staj Yapmış" : "Staj Yapmamış"}
                        </Text>
                        <Text flex='1' variant='ghost' >
                            Mezuniyet Tarihi
                            <Text
                                fontSize='md'
                                color='gray.800'
                                fontWeight={"normal"}

                            >
                                {ogrenci.mezunDate}

                            </Text>
                        </Text>

                    </CardFooter>
                </Card>
            )}
        </>
    );
};

export default OgrenciBilgileri;
