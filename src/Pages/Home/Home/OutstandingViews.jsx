 
  import { Swiper, SwiperSlide } from 'swiper/react';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  // import required modules
  import { Pagination } from 'swiper/modules';

const OutstandingViews = () => {

    return (
     <section>
           <div>
            <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://i.postimg.cc/wMjMtZnH/resort.png" alt="Shoes" className="rounded-xl w-40" />
            </figure>
            <div className="card-body items-center text-center max-w-1/2 mx-auto ">
                <p>WELCOME TO COZYSTAY RESORT</p>
                <h2 className="card-title text-5xl">In the Heart of the South Pacific,<br /> Outstanding Views</h2>
               <p className="text-xl font-semibold ">Nestled in the heart of the Pacific Islands resort, on the edge of a tranquil and beautiful Garden Island,<br /> CozyStay is a haven of warmth, tranquility and rejuvenation. Bathed in brilliant sunshine and clear skies, it <br />offers stunning views of palm-lined beaches and gorgeous coral reefs.</p>
            </div>
            </div>
        </div>
         < div className='py-11'>
     
         <Swiper
             slidesPerView={4}
             spaceBetween={30}
             centeredSlides={true}
             pagination={{
                 clickable: true,
             }}
             modules={[Pagination]}
             className="mySwiper mb-24"
         >
         
             <SwiperSlide>
                 <img src='https://i.postimg.cc/3Jmvp5cC/view-1.jpg' alt="" />
              
             </SwiperSlide>
             <SwiperSlide>
                 <img src= 'https://i.postimg.cc/Dz2y8R9Z/img-76-768x1151.jpg' alt="" />
                 
             </SwiperSlide>
             <SwiperSlide>
                 <img src='https://i.postimg.cc/Gt9496sY/img-77-1-768x1151.jpg' alt="" />
              
             </SwiperSlide>
             <SwiperSlide>
                 <img src='https://i.postimg.cc/CKfJn6k3/img-78-1-768x1152.jpg'  alt="" />
               
             </SwiperSlide>
         </Swiper>
     </ div>
     </section>
    );
};

export default OutstandingViews;