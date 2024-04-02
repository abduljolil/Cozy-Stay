import ServiceCard from "../../../Components/ServiceCard";
import { PiSwimmingPool } from "react-icons/pi";
import { FaCar, FaHome, FaWifi } from "react-icons/fa";
import { MdLocalLaundryService } from "react-icons/md";
import { MdOutlineFreeBreakfast } from "react-icons/md";

 

 
const HomeServices = () => {

 

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row lg:gap-20">
          <img src="https://i.postimg.cc/k4ttRHhf/img-84-1025x1536.jpg" className="max-w-full max-h-full rounded-lg shadow-2xl" />
          <div className="lg: flex flex-col gap-5">
            <p>DISCOVER THE SERVICES WE OFFERED</p>
            <div className="">
            <h1 className="text-5xl  font-semibold">All the Essentials for a Cozy and Comfortable Stay</h1>
 
         <div className="grid grid-cols-2 gap-5 py-5">
         <ServiceCard icon={<FaCar />}title="Airport Pick-up Service"></ServiceCard>
           <ServiceCard icon={<FaHome />}title="Housekeeper Services"></ServiceCard>
           <ServiceCard icon={<FaWifi/>}title="Wifi & Internet"></ServiceCard>
           <ServiceCard icon={<MdLocalLaundryService />}title="Laundry Services"></ServiceCard>
           <ServiceCard icon={<MdOutlineFreeBreakfast />}title="Breakfast in Bed"></ServiceCard>
           <ServiceCard icon={<PiSwimmingPool />}title="Swimming Pool"></ServiceCard>
         </div>
            </div>
          <div className="">
          <img src=" https://i.postimg.cc/SssLpqNt/img-85-1024x683.jpg" className="max-w-full rounded-lg shadow-2xl" />
          </div>
          </div>
        </div>
      </div>
    );
};

export default HomeServices;