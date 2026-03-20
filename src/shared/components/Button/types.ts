import { TouchableOpacityProps } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
}
