 
const ServiceCard = ({icon,title}) => {
    return (
        <div className=" md:flex gap-5">
          <p className="text-6xl text-red-500">{icon}</p>
          <div >
            <h1 className="text-xl font-bold">{title}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec urna quam.</p>
          </div>
            
        </div>
    );
};

export default ServiceCard;