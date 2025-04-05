import { ReactComponent as SesimiLogo } from '../../assets/images/sesimi-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-deep-teal w-full py-8 px-6 md:px-12 fixed bottom-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex-1">
          <p
            className="text-2xl w-full px-0 py-2 text-lime-green"
          >
            Marielen Diaz
          </p>
          <p className="square-1080:hidden mt-4 text-lime-green/80 text-sm max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        
        <div className="text-lime-green font-bold">
          <SesimiLogo className="h-8 w-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer; 