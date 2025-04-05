import { CarCardProps } from '../../types';
import Button from '../Button/Button';
import { ReactComponent as CarImage } from '../../assets/images/sports-car-white.svg';

const CarCard = ({ car }: CarCardProps) => {
  const handleGetStarted = () => {
    console.log(`Get started with ${car.name}`);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg">
      <div className="w-full aspect-[2/1]">
        <CarImage
          className={`w-full h-full ${
            car.color === 'purple' ? 'fill-purple' : 'fill-light-sky-blue'
          }`}
          role="img"
          aria-label={`${car.name} illustration`}
        />
      </div>
      <h2 className="mt-4 text-2xl">
        {car.name}
      </h2>
      
      <p>
        For <span>${car.price.toLocaleString()}</span>
      </p>
      
      <Button
        label="Get Started"
        onClick={handleGetStarted}
        className="mt-4 w-full"
      />
    </div>
  );
};

export default CarCard; 