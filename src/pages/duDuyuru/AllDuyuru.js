import { Flex } from '@chakra-ui/react'
import React from 'react'
import "./duduyuru.css"

function AllDuyuru({ duyuru }) {

    return (
        <>
            {
                duyuru.map((duyuru) => (
                    <Flex
                        key={duyuru.id}
                        flexDirection="row"
                        padding="40px"
                        gap="8px"
                        className="duyuru"
                    >
                        sinem
                    </Flex>

                ))

            }

        </>
    )
}

export default AllDuyuru
