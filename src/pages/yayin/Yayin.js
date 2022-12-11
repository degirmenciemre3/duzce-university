import { Flex, Grid, Center, ButtonGroup } from "@chakra-ui/react";
import "./yayin.css";
import { AdminYayinApi, } from "../../components/apis/api";
import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import axios from "axios";
import YayinCard from "./YayinCard";
import Home from "../home/Home";

const Yayin = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cat, setCat] = useState("Hepsi");
  const categories = [
    "Hepsi",
    "Hakemli Dergiler",
    "Süreli Yayınlar",
    "Kataloglar",
    "E-Bülten",
  ];

  useEffect(() => {
    axios.get(AdminYayinApi).then((res) => {
      setPost(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <Home>
      <section>
        <Flex
          padding="44px"
          gap="8px"
          flexDirection="column"
          minHeight="100vh"
          backgroundColor="gray.50"
        >
          <Flex flexDirection="column" padding="40px" gap="8px">
            <Center>
              <ButtonGroup>
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={cat === category ? "actives" : ""}
                    onClick={() => setCat(category)}
                  >
                    {category}
                  </button>
                ))}
              </ButtonGroup>
            </Center>
          </Flex>
          <Grid gridTemplateColumns="repeat(3, 1fr)" gap="16px">
            {loading ? (
              <Loading />
            ) : (
              <>
                {post.map((event, index) => {
                  return (
                    <YayinCard
                      imgUrl={event.imgUrl}
                      category={event.category}
                      name={event.title}
                      desc={event.description}
                      id={event.id}
                      date={event.date}
                      key={index}
                    />
                  );
                })}
              </>
            )}
          </Grid>
        </Flex>
      </section>
    </Home>
  );
};

export default Yayin;
