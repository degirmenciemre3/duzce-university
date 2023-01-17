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
import { useNavigate } from "react-router-dom/dist";
import {  AdminOgrenciApi } from "../../../components/apis/api";
import AdminHeader from "../admin-header/AdminHeader";

const AdminOgrenciEkle = () => {
    const navigate = useNavigate();
  const [images, setImages] = useState("");
  const OGRENCI = {
    name: "",
    ProfileImage: "",
    lastname: "",
    bolum: "",
    mezunDate: "",
    stajDurumu: true,
    ogrenciMail: "",
    tecrube: "",

  };

  const formik = useFormik({
    initialValues: OGRENCI,
    onSubmit: (values) => {
        console.log(values);
        axios.post(AdminOgrenciApi, values).then((response) => {
            console.log(response);
            alert("Öğrenci Eklendi");
            navigate(-1);
        }
        );
    },
  });

  return (
    <>
      <AdminHeader title={"Öğrenci Ekle"} />

      <form onSubmit={formik.handleSubmit}>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          margin={10}
          padding="40px"
          gap="8px"
          className="ogrenciEkle"
          borderWidth={1}
          borderRadius={8}
          borderColor="gray.200"
          bg="white"
        >
          <Box width="50%" height="100%" gap="8px">
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              padding={5}
              className="ogrenciEkle"
              borderWidth={1}
              borderRadius={8}
              borderColor="gray.200"
              bg="white"
              maxHeight={"50%"}
            >
              <Image
                src={
                  images
                    ? images
                    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAElBMVEXy8vL////6+vr19fX4+Pj8/Px/aeudAAACoklEQVR4nO3c227bMBBF0cgk//+XGwu6kRxeRnFaVGevt8a2AG3QQ0kN8vUFAAAAAAAAAAAAAAAAAAAAAACAv2j5Ba9/fVK/hVgOxHL4Prf0+qD08FgfPbfw8Fjpk8cjlgOxHIjlQCwHYjlIxgoh3DqeXqyQbl+Ky8VK551L9B5PLFb40X2eWKyf3RVrxUpFrMU36KVihbKV88pCKtarfjzlWlpSsepWvh1RPZbr3JVi1SPLObSUYlkri1g7ZpZDGau6zGI3PJWxjKHV+3gqv6NSsXxX8KkqoxWrXFq98R7rkaYVq6jVaxWMpScWK6vVPW9rqKnF2r5e71e6G6G5+vRifZ9zjHFwyZDM9acYayx7PHEOeWIZ4pI5ViGxatW16/UFYlUfsy/HiFUx7iC3oxCrZDx73oc8sQrRarUNeWLlrKepx5AnVqbZaq0lHytmd3/tVu8jqccK2VuMjfA65NVjLdf3mBvhKYjHStuaWTU2wkst6Vj71+64MBiTjXV+7cL2dmK1XJdS+W9i5bI2qfoJsYpXy1rDEa8aq7ymitYPibWqr6nWIT+spRjL+sJNbYmCsexR3n5FOpYdYmZL1IvVmkxrif6WKBerPcXHW6JarN7SGW6JYrH6Q2m0JYrF6rYabolasQatRluiVKzJG5rmXFOKNXhyvOpuiUKxJh4rLP0tUSfW3JPj7ddm1GNNtuptiTKxxsN9194SVWLNDPesifUBkVhzw33X2hI1Ys0O911jS9SI5WzVukuUiDU/3A/vj1XrUSHWjVb2/44JxPJshEWYl/GzJzpieYf7ztgSHx/rbitrS3x8rDsDa7MeJ+0UYn2K9i+zOT09Fn8ueNbCH6Ked3+utxGLWMQCAAAAAAAAAAAAAAAAAAAAAAD4//0BUyATTom0AxcAAAAASUVORK5CYII="
                }
                alt={"duyuru"}
                width={"50%"}
                maxWidth={"50%"}
                height={"100%"}
                objectFit={"cover"}
                maxHeight={"50%"}
                margin={"auto"}
                borderRadius={"10px"}
              />
              <FormControl isRequired marginBottom={"40px"}>
                <FormLabel>Resim URL' si</FormLabel>
                <Input
                  id="ProfileImage"
                  name="ProfileImage"
                  onChange={(e) => {
                    formik.handleChange(e);
                    setImages(e.target.value);
                  }}
                  value={formik.values.ProfileImage}
                  type="text"
                  placeholder="Resim Url"
                />
              </FormControl>
              <FormControl id="name" isRequired>
                <FormLabel>Ad</FormLabel>
                <Input
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </FormControl>
              <FormControl id="lastname" isRequired>
                <FormLabel>Soyad</FormLabel>
                <Input
                  type="text"
                  name="lastname"
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                />
              </FormControl>
              <FormControl id="stajDurumu" isRequired>
                <FormLabel>Staj Durumu</FormLabel>
                <Select
                  placeholder="Staj Durumu"
                  name="stajDurumu"
                  onChange={formik.handleChange}
                  value={formik.values.stajDurumu}
                >
                  <option value={true}>Staj Yapmış</option>
                  <option value={false}>Staj Yapmamış</option>
                </Select>
              </FormControl>
            </Flex>
          </Box>
          <Box width="50%" height="100%" gap="8px">
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              padding={5}
              gap="8px"
              className="ogrenciEkle"
              borderWidth={1}
              borderRadius={8}
              borderColor="gray.200"
              bg="white"
            >
              <FormControl id="bolum" isRequired>
                <FormLabel>Bölüm</FormLabel>
                <Input
                  height={50}
                  type={"text"}
                  name={"bolum"}
                  onChange={formik.handleChange}
                  value={formik.values.bolum}
                />
              </FormControl>
              <FormControl id="tecrube" isRequired>
                <FormLabel>Tecrübe</FormLabel>
                <Textarea
                  width={"100%"}
                  height={350}
                  type={"text"}
                  name={"tecrube"}
                  onChange={formik.handleChange}
                  value={formik.values.tecrube}
                />
              </FormControl>
              <FormControl id="mezunDate" isRequired>
                <FormLabel>Mezuniyet Tarihi</FormLabel>
                <Input
                  height={58}
                  type="date"
                  name="mezunDate"
                  onChange={formik.handleChange}
                  value={formik.values.mezunDate}
                />
                
              </FormControl>
              <FormControl id="ogrenciMail" isRequired>
                <FormLabel>Öğrenci Mail</FormLabel>
                <Input
                    height={58}
                    type="email"
                    name="ogrenciMail"
                    onChange={formik.handleChange}
                    value={formik.values.ogrenciMail}

                />
                </FormControl>
            </Flex>
            <Button
                type="submit"
                className="btn btn-primary"
                style={{
                    width: "100%",
                    height: "50px",
                    backgroundColor: "#3f51b5",
                    color: "white",
                    borderRadius: "10px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    }}
                    onSubmit={formik.handleSubmit}
            >
                sinem
            </Button>
          </Box>
          
        </Flex>
        
      </form>
    </>
  );
};

export default AdminOgrenciEkle;
