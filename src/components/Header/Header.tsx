import { ReactComponent as CarImage } from '../../assets/images/sports-car-white.svg';

const Header = () => {
  return (
    <header className="relative w-full h-[40vh] overflow-hidden">
      {/* Header background image with gradient overlay */}
      <div 
        className="absolute w-full h-full bg-hero bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/50"
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto text-white">
        <h1 className="text-6xl md:text-7xl font-semibold mb-4">
          Ready to<br/>own a car?
        </h1>
        <p className="text-2xl md:text-3xl opacity-90">
          Your Ride, Your Savings
        </p>
        
        {/* White car silhouette */}
        <div className="absolute right-10 bottom-10 w-1/2 text-white">
          <CarImage className="w-full h-full fill-white" />
        </div>
      </div>
    </header>
  );
};

export default Header; 