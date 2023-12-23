
"use client"

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./SingleProductSwiper.scss"

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";



const SingleProductSwiper = ({images}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="swiper-div">
        <Swiper
            style={{
            "--swiper-navigation-color": "pink",
            "--swiper-pagination-color": "pink",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 swiperTop"
        >
        {
            images?.map(photo=>
                <SwiperSlide className="swiper1 swiperBottom">
                    <div>
                        <img src={photo} alt="" />
                    </div>
                </SwiperSlide>                
                )
        }
        </Swiper>
        <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={images.length}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
        >
        {
        images?.map(photo=>
            <SwiperSlide>
                <div>
                    <img src={photo} alt="" />
                </div>
            </SwiperSlide>                
            )
        }
        </Swiper>
    </div>
  )
}

export default SingleProductSwiper