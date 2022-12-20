import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import AdminHeader from '../admin-header/AdminHeader'

const AdminOgrenciEkle = () => {
    return (
        <>
            <AdminHeader title={"Öğrenci Ekle"} />
            <Flex
                flexDirection="column"
                margin={10}
                padding="40px"
                gap="8px"
                className="ogrenciEkle"
                borderWidth={1}
                borderRadius={8}
                borderColor="gray.200"
                bg="white"
            >
                <Box
                    fontWeight="bold"
                    fontSize="2xl"
                    color="gray.800"
                >
                    <Flex
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                        borderWidth={1}
                        borderRadius={8}
                        borderColor="blue.200"
                        bg="blue.100"
                        padding={5}
                    >
                    </Flex>

                </Box>



            </Flex>
        </>
    )
}

export default AdminOgrenciEkle
