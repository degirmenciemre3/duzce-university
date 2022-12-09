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
import { AdminDuyuruApi } from "../../../components/apis/api";
import AdminHeader from "../admin-header/AdminHeader";

const UpdateDuyuru = () => {
  const { id } = useParams();
  const [images, setImages] = useState("");
  const [duyurular, setDuyurular] = useState([]);
  const navigate = useNavigate();
  const _id = Math.floor(Math.random() * 1000);
  console.log(_id);
  const DUYURU = {
    title: "",
    description: "",
    imgUrl: "",
    category: "",
    date: "",
    id: "",
  };

  useEffect(() => {
    axios.get(`${AdminDuyuruApi}/${id}`).then((res) => {
      setDuyurular(res.data);
    });
  }, [id]);

  const formik = useFormik({
    initialValues: DUYURU,

    onSubmit: (values) => {
      axios.put(`${AdminDuyuruApi}/${id}`, values).then((response) => {
        alert("Duyuru Güncellendi");
        navigate(-1);
      });
    },
  });

  return (
    <>
      <AdminHeader title={"Admin Duyuru Güncelle"} />
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
            src={images ? images : duyurular.imgUrl}
            alt={"duyuru"}
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
                    <FormLabel>Duyuru Başlığı</FormLabel>
                    <Input
                      placeholder={duyurular.title}
                      id="title"
                      name="title"
                      onChange={formik.handleChange}
                      value={formik.values.title}
                      type="text"
                    />
                  </FormControl>
                  <FormControl isRequired marginBottom={"20px"}>
                    <FormLabel>Duyuru Konusu</FormLabel>
                    <Textarea
                      placeholder={duyurular.description}
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
                      placeholder={duyurular.date}
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
                      placeholder={duyurular.category}
                      id="category"
                      name="category"
                      onChange={formik.handleChange}
                      value={formik.values.category}
                    >
                      <option>United Arab Emirates</option>
                      <option>Nigeria</option>
                      <option>Kanada</option>
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
                    Duyuru Güncelle
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </form>
      </Flex>
    </>
  );
};

export default UpdateDuyuru;
