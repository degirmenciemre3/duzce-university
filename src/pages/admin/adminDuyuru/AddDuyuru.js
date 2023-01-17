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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminDuyuruApiPost } from "../../../components/apis/api";
import AdminHeader from "../admin-header/AdminHeader";

const AddDuyuru = () => {
  const [images, setImages] = useState("");
  const navigate = useNavigate();
  const DUYURU = {
    title: "",
    description: "",
    imgUrl: "",
    category: "",
    date: "",
  };

 // console.log(`Bearer ${localStorage.getItem("token")}`);
  const formik = useFormik({
    initialValues:DUYURU,
    onSubmit: async(values) => {
      try {
        const response = await axios.post(AdminDuyuruApiPost, values, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response);
       if(response.status===200){
         alert("Başarılı");
         navigate("/admin");
       }
        else{
          alert("Başarısız");
        }
       // navigate("/admin/duyuru");
      } catch (error) {
        console.log(error);
      }
    },
  });

        
    
  

  return (
    <>
      <AdminHeader title={"Admin Duyuru Ekle"} />
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
            src={
              images
                ? images
                : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAElBMVEXy8vL////6+vr19fX4+Pj8/Px/aeudAAACoklEQVR4nO3c227bMBBF0cgk//+XGwu6kRxeRnFaVGevt8a2AG3QQ0kN8vUFAAAAAAAAAAAAAAAAAAAAAACAv2j5Ba9/fVK/hVgOxHL4Prf0+qD08FgfPbfw8Fjpk8cjlgOxHIjlQCwHYjlIxgoh3DqeXqyQbl+Ky8VK551L9B5PLFb40X2eWKyf3RVrxUpFrMU36KVihbKV88pCKtarfjzlWlpSsepWvh1RPZbr3JVi1SPLObSUYlkri1g7ZpZDGau6zGI3PJWxjKHV+3gqv6NSsXxX8KkqoxWrXFq98R7rkaYVq6jVaxWMpScWK6vVPW9rqKnF2r5e71e6G6G5+vRifZ9zjHFwyZDM9acYayx7PHEOeWIZ4pI5ViGxatW16/UFYlUfsy/HiFUx7iC3oxCrZDx73oc8sQrRarUNeWLlrKepx5AnVqbZaq0lHytmd3/tVu8jqccK2VuMjfA65NVjLdf3mBvhKYjHStuaWTU2wkst6Vj71+64MBiTjXV+7cL2dmK1XJdS+W9i5bI2qfoJsYpXy1rDEa8aq7ymitYPibWqr6nWIT+spRjL+sJNbYmCsexR3n5FOpYdYmZL1IvVmkxrif6WKBerPcXHW6JarN7SGW6JYrH6Q2m0JYrF6rYabolasQatRluiVKzJG5rmXFOKNXhyvOpuiUKxJh4rLP0tUSfW3JPj7ddm1GNNtuptiTKxxsN9194SVWLNDPesifUBkVhzw33X2hI1Ys0O911jS9SI5WzVukuUiDU/3A/vj1XrUSHWjVb2/44JxPJshEWYl/GzJzpieYf7ztgSHx/rbitrS3x8rDsDa7MeJ+0UYn2K9i+zOT09Fn8ueNbCH6Ked3+utxGLWMQCAAAAAAAAAAAAAAAAAAAAAAD4//0BUyATTom0AxcAAAAASUVORK5CYII="
            }
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
                      id="title"
                      name="title"
                      {...formik.getFieldProps('title')}
                      onChange={formik.handleChange}
                      value={formik.values.title}
                      type="text"
                    />
                  </FormControl>
                  <FormControl isRequired marginBottom={"20px"}>
                    <FormLabel>Duyuru Konusu</FormLabel>
                    <Textarea
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
                      id="category"
                      name="category"
                      onChange={formik.handleChange}
                      value={formik.values.category}
                      placeholder="Select category"
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
                    Duyuru Ekle
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

export default AddDuyuru;
