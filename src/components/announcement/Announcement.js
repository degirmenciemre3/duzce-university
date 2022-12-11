import React, { useEffect, useState } from "react";
import "./announcement.css";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

import axios from "axios";
import { AdminDuyuruApi } from "../apis/api";
import Loading from "../loading/Loading";
import Slider from "./Slider";

function Announcement() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(loading);

    useEffect(() => {
        axios.get(AdminDuyuruApi).then((res) => {
            setPost(res.data);
            setLoading(false);
        });
    }, []);



    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    return (
        <section id="duyuruslide" className="container testimonials">
            <div className="section-title">
                <h2>Duyurular</h2>
            </div>
            {loading ? <Loading /> : <Slider result={post} />}
        </section>
    );
}

export default Announcement;
