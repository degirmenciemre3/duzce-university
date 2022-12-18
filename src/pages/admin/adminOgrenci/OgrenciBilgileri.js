import { Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AdminOgrenciApi } from '../../../components/apis/api';
import Loading from '../../../components/loading/Loading';

const OgrenciBilgileri = ({ ogrenciId }) => {
    const [ogrenci, setOgrenci] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`${AdminOgrenciApi}/${ogrenciId}`).then((res) => {
            setOgrenci(res.data);
            setLoading(false);

        });
    }, [ogrenciId]);
    console.log(ogrenci);
    return (
        <>
            {
                loading ? <Text
                    fontWeight="bold"
                    fontSize="2xl"
                    color="gray.800"

                >
                    Öğrenci Detayını görmek için öğrenci seçiniz.

                </Text> :
                    ogrenci.name
            }
        </>
    )
}

export default OgrenciBilgileri
