import React from 'react'
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

function Announcement() {

    const duyuru = [
        {
            title: "Eğitimi Geliştirme",
            desc: "Üniversitemiz Eğitim Fakültesi’nde gerçekleştirilen imza töreninde, protokolü Üniversitemiz adına Eğitim Fakültesi Dekanı Prof. Dr. Mustafa Koç, Düzce Özel Safir Koleji adına ise Murat Ayyıldız imzaladı.",
            tag: ["Egitim", "Gelişim"],
            author: "Duzce University",
            img: "https://cdn.duzce.edu.tr/File/GetFile/1052cbda-bce9-4e86-8c28-43aa6f2f7074"
        },
        {
            title: "Nanoteknoloji İlaç Sektörü",
            desc: "Üniversitemiz Tıp Fakültesi’nin hayata geçirdiği “Tıp Fakültesi Konferanslar Serisi” etkinlikleri kapsamında,",
            tag: ["Nano", "Teknoloji"],
            author: "Duzce University",
            img: "https://cdn.duzce.edu.tr/File/GetFile/cdc78643-064a-414c-8cb7-d60f2aa4598d"
        },
        {
            title: "Girişimcilik Maratonu",
            desc: "Düzce Üniversitesi ve Düzce Teknopark iş birliği ile fikirden-şirkete uzanan bir serüven olan “Girişimcilik Maratonu 2022” 16-18 Aralık 2022 tarihleri arasında gerçekleştirilecektir.",
            tag: ["Maraton", "Yarışma"],
            author: "Duzce University",
            img: "https://cdn.duzce.edu.tr/File/GetFile/b3aefec5-6030-4b9f-a658-36d7a82f89c8"
        },
        {
            title: "Atatürk'ü Anma Günü",
            desc: "Bu vatan senin gibi bir kahramanı ebediyen bir daha görmeyecek yerinde rahat uyu…",
            tag: ["Atatürk", "Ölmedi"],
            author: "Duzce University",
            img: "https://cdn.duzce.edu.tr/File/GetFile/1c3ff140-3c4b-47c8-966c-e5da94bb0676"
        },
        {
            title: "Akıllı İmalat Modülü",
            desc: "2020 yılında TÜBİTAK Teknogirişim Sermaye Desteği ile Üniversitemiz Öğretim Üyeleri Dr. Sabri Uzuner, Doç. Dr. Engin Nas ve Kastamonu Üniversitesi Öğretim Üyesi Dr. Erman Zurnacı tarafından Düzce Teknopark'ta kurulan...",
            tag: ["Teknoloji", "Teknogirişim"],
            author: "Duzce University",
            img: "https://cdn.duzce.edu.tr/File/GetFile/db7b4abe-c323-4ba8-bbf5-a5e739614e01"
        },
        {
            title: "Gençlik Sempozyumu ",
            desc: "Üniversitemiz, Düzce Belediyesi ve Düzce İl Müftülüğü’nün iş birliği ile düzenlenen “Günümüzde Gençlik Sempozyumu”nda gençlerin gelişimi ve karşılaşabileceği problemlerin çözüm yolları anlatıldı.",
            tag: ["Genç", "Gelişim"],
            author: "Duzce University",
            img: "https://cdn.duzce.edu.tr/File/GetFile/5a412ba0-c17c-4f93-8089-0420a0070e42"
        },

    ]
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
    return <section id='Duyurular' className='container testimonials'>
        <div className="section-title">
            <h2>Bilimsel Araştırma Projeleri</h2>
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
            {duyuru.map((item, index) => (
                <SwiperSlide key={`slide-${index}`} tag="li" style={{ listStyle: 'none' }}>
                    <div className="post">
                        <div className="header_post">
                            <img src={item.img} alt={`slide-${index}`} />
                        </div>

                        <div className="body_post">
                            <div className="post_content">

                                <h1>
                                    {item.title}
                                </h1>
                                <p>
                                    {item.desc}
                                </p>

                                <div className="container_infos">
                                    <div className="postedBy">
                                        <span>author</span>
                                        {item.author}
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