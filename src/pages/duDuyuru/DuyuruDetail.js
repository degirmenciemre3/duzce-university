import React from 'react'
import { useParams } from 'react-router-dom'

function DuyuruDetail() {
    const id =useParams()

    

  return (
    <div>
        <h1>Detail {id.id} </h1>
    </div>
  )
}

export default DuyuruDetail