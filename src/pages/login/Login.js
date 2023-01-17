import { useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AccountLogin } from "../../components/apis/api";

const Login = () => {
  const navigate = useNavigate();

  const Employee={
      userName: "",
      password: "",
      returnUrl:"",
}

    const formik = useFormik({
    initialValues: Employee,
    onSubmit: (values) => {
        console.log(values);
        axios.post(AccountLogin, values).then((response) => {
            console.log(response);
            if (response.status===200) {
                alert("Başarılı");
                const token = response.data.token
                localStorage.setItem("token", token);
               navigate("/admin");
            } else {
                alert("Kullanıcı adı veya şifre hatalı");
            }
        });
    },
});

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="userName">email Address</FormLabel>
              <Input
                id="userName"
                name="userName"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.userName}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>
            <Button type="submit" colorScheme="purple" width="full">
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
