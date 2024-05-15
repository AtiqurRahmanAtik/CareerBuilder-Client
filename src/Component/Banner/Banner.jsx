import photo from "../../assets/Image/onsite soft.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Banner() {

    const [banner, setBanner] = useState();
   

    useEffect(()=> {
        axios.get('https://career-builder-server-one.vercel.app/bannerJob')
        .then(res => {
            setBanner(res.data);
        })
        .catch(error =>{
            console.log(error);
        })
    },[]);


    

  return (
    
    <div className='max-h-screen'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
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
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/4SbBT0p/onsite-soft.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-red-400">Software Engineer</h1>
      <p className="mb-5  text-justify">Join our team as a Software Engineer to develop cutting-edge software solutions for our clients. We're looking for skilled developers proficient in multiple programming languages.</p>
    
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/P9kFQyj/remot.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>

  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-red-400">Data Analyst</h1>
      <p className="mb-5">Seeking a Data Analyst to analyze large datasets, generate insights, and contribute to data-driven decision-making processes remotely. Strong statistical and analytical skills required.</p>
    
    </div>
  </div>

</div>
            </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/hf2vrzg/onsite-network.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-red-400">Network Administrator</h1>
      <p className="mb-5 text-justify">Tech Giant Corp. requires a skilled Network Administrator to manage and optimize our network infrastructure. This role involves troubleshooting network issues and ensuring network security.</p>
    
    </div>
  </div>
</div>
            </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/GsGd7DM/hybrid-bussines.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-red-400">Business Analyst</h1>
      <p className="mb-5  text-justify">Digital Dynamics Ltd. seeks a Business Analyst to analyze business processes, gather requirements, and contribute to strategic decision-making. This role involves both on-site and remote work.</p>
    
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/yg7gMd0/developer-remote.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-red-400">Software Developer</h1>
      <p className="mb-5  text-justify">Tech Solutions Inc. is seeking a skilled Software Developer to work remotely on exciting software projects. Strong programming skills and experience with modern technologies required.</p>
    
    </div>
  </div>
</div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
