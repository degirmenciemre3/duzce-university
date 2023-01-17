import { GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { AdminSirketler } from "../../../components/apis/api";
import Loading from "../../../components/loading/Loading";
import { useNavigate } from "react-router-dom";

const AdminSirketCard = () => {
  const [sirketler, setSirketler] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(AdminSirketler).then((res) => {
      setSirketler(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <Grid marginLeft={10} templateColumns="repeat(3, 1fr)" gap={8}>
      {loading ? (
        <Loading />
      ) : (
        sirketler.map((sirket, index) => (
          <GridItem colSpan={1} key={index}>
            <Card maxW="sm">
              <CardBody>
                <Stack mt="6" spacing="3">
                  <Heading size="md">{sirket.sirketAdi}</Heading>
                  <Text noOfLines={2}>{sirket.sirketDetay}</Text>
                  <Text>{sirket.alani}</Text>
                  {sirket.stajyerDurum ? (
                    <Text
                      color="green.500"
                      padding={2}
                      border="2px"
                      borderColor={"green.500"}
                      borderRadius={"md"}
                      textAlign={"center"}
                    >
                      Stajyer Arıyor
                    </Text>
                  ) : (
                    <Text
                      color="red.500"
                      padding={2}
                      border="2px"
                      borderColor={"red.500"}
                      borderRadius={"md"}
                      textAlign={"center"}
                    >
                      Stajyer Aramıyor
                    </Text>
                  )}
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter justifyContent={"center"} alignItems={"center"}>
                <Button 
                onClick={() => navigate(`/admin/sirket/detay/${sirket.id}`)}
                width={"100%"} variant="solid" colorScheme="blue">
                  Detay
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        ))
      )}
    </Grid>
  );
};

export default AdminSirketCard;
