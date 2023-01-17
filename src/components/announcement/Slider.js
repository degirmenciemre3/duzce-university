import "./announcement.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";
import { useNavigate } from "react-router-dom/dist";

function Slider(post) {
    console.log(post.result);
    const navigate = useNavigate();
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
                    <div className="post"
                   onClick={() => {
                          navigate(`/duyumlar/detay/${item.id}`);
                    }
                   }
                    >
                        <div className="header_post"
                         
                        >
                            <img src={item.imgUrl} alt={`slide-${index}`} />
                        </div>

                        <div className="body_post">
                            <div className="post_content">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>

                                <div className="container_infos">
                                    <div className="postedBy">
                                        <span>Date</span>
                                        {item.date}
                                    </div>

                                    <div className="container_tags">
                                        <span>tags</span>
                                        <div className="tags">
                                            <ul>
                                                <li>
                                                    {item.category}
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
    );
}

export default Slider;
