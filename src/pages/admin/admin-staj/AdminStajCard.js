import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { AdminSirketler } from "../../../components/apis/api";
import Loading from "../../../components/loading/Loading";

const AdminStajCard = () => {
  const [stajlar, setStajlar] = React.useState();
  const [loading, setLoading] = React.useState(true);

  //get data from api
  useEffect(() => {
    axios.get(AdminSirketler).then((res) => {
      const resultData = res.data;
      console.log(resultData);
      setStajlar(resultData);
      setLoading(false);
    });
  }, []);

  //console.log(stajlar);
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} margin="auto" width="100%">
      {loading ? (
        <Loading />
      ) : (
        stajlar.map((staj, index) => (
         <>
         {
            staj.stajyerDurum ? (
              <GridItem colSpan={1} key={index}>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Stack>
                <CardBody>
                  <Heading size="md">{staj.staj.bolum}</Heading>

                  <Text py="2">{staj.staj.alan}</Text>
                  <Text py="2" color={"Highlight"}>
                    {staj.staj.kacKisi} Kişi Alınacak.
                  </Text>
                </CardBody>

                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Detay
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          </GridItem>
            ) : (null)

         }
         </>

        ))
      )}
    </Grid>
  );
};

export default AdminStajCard;
