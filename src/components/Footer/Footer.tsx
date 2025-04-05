import { ReactComponent as SesimiLogo } from '../../assets/images/sesimi-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-deep-teal w-full py-8 px-6 md:px-12 fixed bottom-0">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="flex justify-between items-center w-full">
          <p className="text-2xl text-lime-green">
            Marielen Diaz
          </p>
          <div className="text-lime-green font-bold">
            <SesimiLogo className="h-8 w-auto" />
          </div>
        </div>
        
        <p className="square-1080:hidden text-lime-green/80 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 