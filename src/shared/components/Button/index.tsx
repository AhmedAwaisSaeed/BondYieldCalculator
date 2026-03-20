import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Colors } from '@/shared/theme/colors';
import { styles } from './styles';
import type { ButtonProps, ButtonVariant, ButtonSize } from './types';

const loaderColorMap: Record<ButtonVariant, string> = {
  primary: Colors.text.inverse,
  secondary: Colors.text.inverse,
  outline: Colors.primary,
  ghost: Colors.primary,
};

export const Button = ({
  label,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  disabled,
  style,
  ...rest
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;

  const containerStyle: ViewStyle[] = [
    styles.base,
    styles[variant],
    styles[size as ButtonSize],
    fullWidth ? styles.fullWidth : {},
    isDisabled ? styles.disabled : {},
    style as ViewStyle,
  ];

  const labelStyle = [
    styles[`label${capitalize(variant)}` as keyof typeof styles],
    styles[`label${capitalize(size)}` as keyof typeof styles],
  ];

  return (
    <TouchableOpacity
      style={containerStyle}
      disabled={isDisabled}
      activeOpacity={0.75}
      {...rest}
    >
      {isLoading && (
        <ActivityIndicator
          size="small"
          color={loaderColorMap[variant]}
          style={styles.loader}
        />
      )}
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
