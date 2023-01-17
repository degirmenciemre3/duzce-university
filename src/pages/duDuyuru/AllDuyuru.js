import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom/dist";
import "./duduyuru.css";

function AllDuyuru({ duyuru }) {
  const navigate = useNavigate();
  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      margin={10}
      padding="40px"
      gap="8px"
      className="ogrenciEkle"
      alignItems={"center"}
      borderWidth={1}
      borderRadius={8}
    >
      <Grid templateColumns="repeat(3, 1fr)" gap={6} className="duyuruGrid">
        {duyuru.map((duyuru) => (
          <GridItem colSpan={1} className="duyuruGridItem">
            <Card maxW="sm"
            >
              <CardBody>
                <Image
                  src={duyuru.imgUrl}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{duyuru.title}</Heading>
                  <Text noOfLines={4}>{duyuru.description}</Text>
                  <Text
                    color={"gray.500"}
                    fontSize={"md"}
                    backgroundColor={"blue.100"}
                    p={2}
                    borderRadius={"md"}
                    width={"fit-content"}
                  >
                    {duyuru.category}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button
                  width={"100%"}
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => {
                    navigate(`/duyurular/detay/${duyuru.id}`);
                  }}
                >
                  Detay için tıklayınız
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
}

export default AllDuyuru;
