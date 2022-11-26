import React from 'react'
import "./loading.css"
function Loading({ loadingTitle }) {
    return <div>

        <div className="loading">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>


        </div>
        <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
            {loadingTitle} Yükleniyor...
        </h1>
    </div>
}

export default Loading
