export interface CarInfo {
  color: 'purple' | 'blue';
  price: number;
  name: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export interface CarCardProps {
  car: CarInfo;
} 