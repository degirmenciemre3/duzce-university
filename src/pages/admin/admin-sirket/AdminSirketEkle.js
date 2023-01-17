import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import AdminHeader from '../admin-header/AdminHeader'





const AdminSirketEkle = () => {
  return (
    <>
    <AdminHeader title={"Şirket Ekle"} />
    <form
    >
    <Flex
    flexDirection={"row"}
    gap={10}
    justifyContent={"space-between"}
    margin={10}
    padding={10}
    border={"1px"}
    borderColor={"gray.200"}
    borderRadius={"10px"}
    height={"100%"}
    >
      <Box

      >
        
      </Box>
      <Box>sağ</Box>
    </Flex>
    </form>
  </>
  
  )
}

export default AdminSirketEkle