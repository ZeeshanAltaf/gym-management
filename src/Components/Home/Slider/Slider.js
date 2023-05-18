import React from "react";
import userImage from "../../../assets/reviewer.png";
import quote from "../../../assets/Image/HomeReview/coma.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <div className="mid-container">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="image-slide-bgOne relative md:px-10 md:py-24 px-5 py-20 md:flex items-center justify-between">
                        <div className="md:w-[70%] flex">
                            <img className="quote_image relative top-[-35px]  quote_image_one inline-block" src={quote} alt="" />
                            <span className="text-white italic mx-auto">This gym is amazing. Amazing facility, top equipment and great environment. Good service with friendly staff and super clean and comfortable gym for everyone from beginners to professional</span>
                            <img className="quote_image quote_image_two inline-block align-bottom -mb-5" src={quote} alt="" />
                        </div>
                        <div className="md:w-[25%] lg:mr-[-35px] mt-8 md:mt-0 flex flex-col items-center justify-center">
                            <img className="user_image" src={userImage} alt="" />
                            <h1 className="text-white text-3xl font-bold py-4">John Doe</h1>
                            <p className="text-white font-xl">Gym User</p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-slide-bgOne relative md:px-10 md:py-24 px-5 py-20 md:flex items-center justify-between">
                        <div className="md:w-[70%] flex">
                            <img className="quote_image relative top-[-35px]  quote_image_one inline-block" src={quote} alt="" />
                            <span className="text-white italic mx-auto">This gym is amazing. Amazing facility, top equipment and great environment. Good service with friendly staff and super clean and comfortable gym for everyone from beginners to professional.</span>
                            <img className="quote_image quote_image_two inline-block align-bottom -mb-5" src={quote} alt="" />
                        </div>
                        <div className="md:w-[25%] lg:mr-[-35px] mt-8 md:mt-0 flex flex-col items-center justify-center">
                            <img className="user_image" src={userImage} alt="" />
                            <h1 className="text-white text-3xl font-bold py-4">John Doe</h1>
                            <p className="text-white font-xl">Gym User</p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-slide-bgOne relative md:px-10 md:py-24 px-5 py-20 md:flex items-center justify-between">
                        <div className="md:w-[70%] flex">
                            <img className="quote_image relative top-[-35px]  quote_image_one inline-block" src={quote} alt="" />
                            <span className="text-white italic mx-auto">This gym is amazing. Amazing facility, top equipment and great environment. Good service with friendly staff and super clean and comfortable gym for everyone from beginners to professional</span>
                            <img className="quote_image quote_image_two inline-block align-bottom -mb-5" src={quote} alt="" />
                        </div>
                        <div className="md:w-[25%] lg:mr-[-35px] mt-8 md:mt-0 flex flex-col items-center justify-center">
                            <img className="user_image" src={userImage} alt="" />
                            <h1 className="text-white text-3xl font-bold py-4">John Doe</h1>
                            <p className="text-white font-xl">Gym User</p>
                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div >
    );
}
