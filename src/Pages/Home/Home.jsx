import { Helmet } from "react-helmet-async";
import Banner from "./Home/Banner";
import OutstandingViews from "./Home/OutstandingViews";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Cozy Stay | Home!</title>
       </Helmet>
       <Banner></Banner>
       <OutstandingViews></OutstandingViews>
        
        </div>
    );
};

export default Home;