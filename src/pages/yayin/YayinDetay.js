import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdminYayinApi } from "../../components/apis/api";
import Loading from "../../components/loading/Loading";
import Home from "../home/Home";

const YayinDetay = () => {
    const id = useParams();
    const [yayin, setYayin] = useState({});
    const [loading, setLoading] = useState(true);
    const [line, setLine] = useState(3)
    useEffect(() => {
        axios
            .get(`${AdminYayinApi}/${id.id}`)
            .then((res) => {
                setYayin(res.data);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, [id.id]);

    return (
        <Home>
            <section>
                {loading ? (
                    <Loading />
                ) : (
                    <Flex
                        marginTop={18}
                        padding={10}
                        flexDirection="row"
                        gap={10}
                        backgroundColor="gray.50"
                        borderRadius="md"
                        boxShadow="md"
                    >
                        <Box>
                            <Flex flexDirection="column" gap={4}>
                                <Box fontSize="2xl" fontWeight="bold">
                                    <Image
                                        src={yayin.imgUrl}
                                        alt={yayin.title}
                                        borderRadius="md"
                                        maxWidth={400}
                                    />
                                    <Text
                                        fontSize={15}
                                        fontWeight="normal"
                                        color="gray.500"
                                        marginTop={4}
                                    >
                                        Kategori
                                    </Text>
                                    <Text
                                        fontSize="sm"
                                        fontWeight="bold"
                                        color="white"
                                        marginTop={1}
                                        width={150}
                                        border="1px"
                                        borderColor="gray.300"
                                        padding={1}
                                        borderRadius="50"
                                        backgroundColor={"blue.200"}
                                        justifyContent="center"
                                        alignItems="center"
                                        textAlign="center"
                                        _hover={{ backgroundColor: "blue.500" }}
                                    >
                                        {yayin.category}
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box
                            border={1}
                            borderColor="gray.300"
                            borderRadius="md"
                            padding={2}
                            backgroundColor="white"
                        >
                            <Text
                                fontSize="xl"
                                fontWeight="bold"
                                color="white"
                                border="1px"
                                borderColor="gray.300"
                                width="xl"
                                padding={2}
                                borderRadius="8"
                                backgroundColor={"blue.500"}
                                justifyContent="center"
                                alignItems="center"
                                textAlign="center"
                            >
                                {yayin.title}
                            </Text>
                            <Text
                                fontSize={15}
                                fontWeight="normal"
                                color="gray.500"
                                marginTop={2}
                                padding={1}
                            >
                                {yayin.date}
                            </Text>
                            <Text
                                fontSize={20}
                                fontWeight="normal"
                                color="gray.500"
                                marginTop={4}
                            >
                                Yayın Detay
                            </Text>
                            <Text
                                fontSize={15}
                                fontWeight="normal"
                                color="black.500"
                                marginTop={4}
                                padding={4}
                                noOfLines={line}
                                onClick={() => setLine(0)}
                            >
                                {yayin.description}
                                Devamını okumak için tıklayınız.
                            </Text>
                        </Box>
                    </Flex>
                )}
            </section>
        </Home>
    );
};

export default YayinDetay;
