import React, { useEffect, useState } from 'react'
import "./announcement.css"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/css';
import axios from 'axios';
import { announcementURL } from '../apis/api';
import Loading from '../loading/Loading';

function Announcement() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        axios.get("https://duzceuniversitywebapi.azurewebsites.net/api/duyurular/").then((res) => {
            setPost(res.data);
        })
        setLoading(false);

    }, []);

    console.log(post);


    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
    return <section id='duyuruslide' className='container testimonials'>
        <div className="section-title">
            <h2>Duyurular</h2>
        </div>

        <Swiper
            breakpoints={{
                // when window width is >= 640px
                640: {
                    width: 640,
                    slidesPerView: 1,

                },
                // when window width is >= 768px
                768: {
                    width: 768,
                    slidesPerView: 2,
                },
            }}
            id="main"
            width="480"
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={5}
            slidesPerView={1}
        >
            {loading & <Loading />}:
            {
                post.map((item, index) => (
                    <SwiperSlide key={`slide-${index}`} tag="li" style={{ listStyle: 'none' }}>
                        <div className="post">
                            <div className="header_post">
                                <img src={item.image} alt={`slide-${index}`} />
                            </div>

                            <div className="body_post">
                                <div className="post_content">

                                    <h1>
                                        {item.baslik}
                                    </h1>
                                    <p>
                                        {item.kisaAciklama}
                                    </p>

                                    <div className="container_infos">
                                        <div className="postedBy">
                                            <span>Date</span>
                                            {item.tarih}
                                        </div>

                                        <div className="container_tags">
                                            <span>tags</span>
                                            <div className="tags">
                                                <ul>

                                                    <li>
                                                        1
                                                    </li>
                                                    <li>
                                                        2
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>



        ...


    </section>

}

export default Announcement

/**
 //SLİDE PUSH THEN 10
 for (let i = 0; i < 10; i += 1) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li" style={{ listStyle: 'none' }}>
                <img
                    style={{ width: '100%' }}
                    src={`https://picsum.photos/id/${i + 1}/500/300`}
                    alt={`Slide ${i}`}
                />
            </SwiperSlide>
        );
    }

 */