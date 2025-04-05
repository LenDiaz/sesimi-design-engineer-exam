import { CarInfo } from './types';
import Header from './components/Header/Header';
import CarCard from './components/CarCard/CarCard';
import Footer from './components/Footer/Footer';

const App = () => {
  const cars: CarInfo[] = [
    { color: 'purple', price: 32000, name: 'Sports Car Purple' },
    { color: 'purple', price: 32000, name: 'Sports Car Purple' },
    { color: 'blue', price: 32000, name: 'Sports Car Blue' },
    { color: 'blue', price: 32000, name: 'Sports Car Blue' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Car grid section */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-13 pb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <CarCard
              key={`${car.color}-${index}`}
              car={car}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
