import React, { useEffect, useState } from 'react'
import "../announcement/announcement.css"
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
function Sliders({ post }) {
    console.log("postpost:", post);
    return (
        <div>
            {post ?
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
                                                        {item.tag[1]}
                                                    </li>
                                                    <li>
                                                        {item.tag[0]}
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )) : <h1>yok</h1>}
        </div>
    )
}

export default Sliders
