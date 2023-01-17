import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminYayinApi } from "../../../components/apis/api";
import AdminHeader from "../admin-header/AdminHeader";

const UpdateYayin = () => {
  const { id } = useParams();
  const [images, setImages] = useState("");
  const [yayin, setYayin] = useState([]);
  const navigate = useNavigate();
  const _id = Math.floor(Math.random() * 1000);
  console.log(_id);
  const YAYIN = {
    title: "",
    description: "",
    imgUrl: "",
    category: "",
    date: "",
    id: "",
  };

  useEffect(() => {
    axios.get(`${AdminYayinApi}/${id}`).then((res) => {
      setYayin(res.data);
    });
  }, [id]);

  const formik = useFormik({
    initialValues: YAYIN,

    onSubmit: (values) => {
      axios.put(`${AdminYayinApi}/${id}`, values).then((response) => {
        alert("Yayın Güncellendi");
        navigate(-1);
      });
    },
  });

  return (
    <>
      <AdminHeader title={"Admin Yayın Güncelle"} />
      <Flex
        display={"column"}
        border={"2px "}
        borderColor={"blue.200"}
        borderRadius={"10px"}
        width={"70%"}
        margin={"auto"}
        marginTop={"60px"}
      >
        <Box
          margin={"40px"}
          padding={"10px"}
          borderRadius={"10px"}
          border={"2px  "}
          borderColor={"blue.100"}
          height={"15rem"}
          justifyItems={"center"}
          alignContent={"center"}
          textAlign={"center"}
        >
          <Image
            src={images ? images : yayin.imgUrl}
            alt={"yayin"}
            width={"50%"}
            height={"100%"}
            margin={"auto"}
            borderRadius={"10px"}
          />
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Box>
            <Flex
              display={"flex"}
              justifyContent={"space-between"}
              margin={"40px"}
              gap={6}
            >
              <Box
                borderRadius={"10px"}
                border={"2px  "}
                borderColor={"blue.300"}
                padding={"10px"}
                width={"50%"}
              >
                <Flex display={"row"}>
                  <FormControl isRequired marginBottom={"20px"}>
                    <FormLabel>Yayın Başlığı</FormLabel>
                    <Input
                      placeholder={yayin.title}
                      id="title"
                      name="title"
                      onChange={formik.handleChange}
                      value={formik.values.title}
                      type="text"
                    />
                  </FormControl>
                  <FormControl isRequired marginBottom={"20px"}>
                    <FormLabel>Yayin Konusu</FormLabel>
                    <Textarea
                      placeholder={yayin.description}
                      id="description"
                      name="description"
                      onChange={formik.handleChange}
                      value={formik.values.description}
                      type="text"
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Tarih (18/10/1999)</FormLabel>
                    <Input
                      placeholder={yayin.date}
                      id="date"
                      name="date"
                      onChange={formik.handleChange}
                      value={formik.values.date}
                      type="text"
                    />
                  </FormControl>
                </Flex>
              </Box>
              <Box
                borderRadius={"10px"}
                border={"2px  "}
                borderColor={"blue.300"}
                padding={"10px"}
                width={"50%"}
              >
                <Flex display={"row"}>
                  <FormControl isRequired marginBottom={"40px"}>
                    <FormLabel>Kategori</FormLabel>
                    <Select
                      placeholder={yayin.category}
                      id="category"
                      name="category"
                      onChange={formik.handleChange}
                      value={formik.values.category}
                    >
                    <option>BM</option>
                  <option>EEM</option>
                  <option>Doktor</option>
                    </Select>
                  </FormControl>
                  <FormControl isRequired marginBottom={"40px"}>
                    <FormLabel>Resim URL' si</FormLabel>
                    <Input
                      id="imgUrl"
                      name="imgUrl"
                      onChange={(e) => {
                        formik.handleChange(e);
                        setImages(e.target.value);
                      }}
                      value={formik.values.imgUrl}
                      type="text"
                      placeholder="Resim Url"
                    />
                  </FormControl>

                  <Button type="submit" colorScheme="blue" width="full">
                    Yayın Güncelle
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </form>
      </Flex>
    </>
  )
}

export default UpdateYayin