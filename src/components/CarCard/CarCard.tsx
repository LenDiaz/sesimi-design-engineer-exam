import { CarCardProps } from '../../types';
import Button from '../Button/Button';
import { ReactComponent as CarImage } from '../../assets/images/sports-car-white.svg';

const CarCard = ({ car }: CarCardProps) => {
  const handleGetStarted = () => {
    console.log(`Get started with ${car.name}`);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg">
      <div className="w-full aspect-[2/1] ">
        <CarImage
          className={`w-full h-full ${
            car.color === 'purple' ? 'fill-purple' : 'fill-light-sky-blue'
          }`}
          role="img"
          aria-label={`${car.name} illustration`}
        />
      </div>
      <h2 className="font-semibold mt-4 text-3xl text-center">
        {car.name}
      </h2>
      
      <div className="relative mt-2">
        <span className="absolute top-[1px] left-[5px] text-sm">For</span>
        <span className="text-xl font-semibold pl-8">${car.price.toLocaleString()}</span>
      </div>
      
      <Button
        label="Get Started"
        onClick={handleGetStarted}
        className="mt-4 w-full font-semibold text-xl"
      />
    </div>
  );
};

export default CarCard; 