import { Helmet } from "react-helmet-async";
import Banner from "./Home/Banner";
import OutstandingViews from "./Home/OutstandingViews";
import HomeServices from "./Home/HomeServices";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Cozy Stay | Home!</title>
       </Helmet>
       <Banner></Banner>
       <OutstandingViews></OutstandingViews>
       <HomeServices></HomeServices>
        
        </div>
    );
};

export default Home;