import { ButtonProps } from '../../types';

const Button = ({ label, onClick, className = '' }: ButtonProps) => {

  return (
    <button
      className={`hover:bg-opacity-50 transition bg-lime-green px-6 py-3 ${className}`}
      onClick={onClick}
      tabIndex={0}
    >
      {label}
    </button>
  );
};

export default Button;