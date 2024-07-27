import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

// Images
import banner1 from "@/assets/images/banner1.jpg";
import banner2 from "@/assets/images/banner2.jpg";
import banner3 from "@/assets/images/banner3.jpg";

// Types
import { BannerType } from "@/types/banner";

// Data
const bannerData: BannerType[] = [
  {
    id: 1,
    title: "&quot;Choose jewelry according <br /> to your zodiac here&quot;",
    subtitle:
      "Jewelry with unique designs that can be custom made to your liking",
    imageUrl: banner1,
  },
  {
    id: 2,
    title: "&quot;Choose jewelry according <br /> to your zodiac here&quot;",
    subtitle:
      "Jewelry with unique designs that can be custom made to your liking",
    imageUrl: banner2,
  },
  {
    id: 3,
    title: "&quot;Choose jewelry according <br /> to your zodiac here&quot;",
    subtitle:
      "Jewelry with unique designs that can be custom made to your liking",
    imageUrl: banner3,
  },
];

// Component Props Type
interface BannerItemProps {
  banner: BannerType;
}

// Banner Item Component
const BannerItem: React.FC<BannerItemProps> = ({ banner }) => {
  return (
    <div
      className="h-[650px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${banner.imageUrl})` }}
    >
      <div className="h-full container grid lg:grid-cols-2">
        <div className="h-full py-16 flex flex-col justify-end lg:justify-center items-center lg:items-start gap-4">
          <h1
            className="text-3xl lg:text-5xl leading-tight font-bold italic"
            dangerouslySetInnerHTML={{ __html: banner.title }}
          ></h1>
          <p
            className="text-2xl font-medium hidden lg:block"
            dangerouslySetInnerHTML={{ __html: banner.subtitle }}
          />
        </div>
        <div className="hidden lg:block"></div>
      </div>
    </div>
  );
};

// Hero Banner Component
const HeroBanner: React.FC = () => {
  return (
    <section className="bg-accent max-h-[650px] overflow-hidden">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {bannerData.map((banner) => (
          <SwiperSlide key={banner.id}>
            <BannerItem banner={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;
