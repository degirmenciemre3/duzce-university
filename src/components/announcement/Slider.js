import "./announcement.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";

function Slider(post) {
    console.log(post.result);
    return (
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
            {post.result.map((item, index) => (
                <SwiperSlide
                    key={`slide-${index}`}
                    tag="li"
                    style={{ listStyle: "none" }}
                >
                    <div className="post">
                        <div className="header_post">
                            <img src={item.image} alt={`slide-${index}`} />
                        </div>

                        <div className="body_post">
                            <div className="post_content">
                                <h1>{item.baslik}</h1>
                                <p>{item.kisaAciklama}</p>

                                <div className="container_infos">
                                    <div className="postedBy">
                                        <span>Date</span>
                                        {item.tarih}
                                    </div>

                                    <div className="container_tags">
                                        <span>tags</span>
                                        <div className="tags">
                                            <ul>
                                                <li>1</li>
                                                <li>2</li>
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
    );
}

export default Slider;
