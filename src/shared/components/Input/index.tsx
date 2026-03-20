import React, { forwardRef, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import type { InputProps } from './types';

export const Input = forwardRef<TextInput, InputProps>(
  ({ label, error, required, style, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const containerStyle = [
      styles.inputContainer,
      isFocused && styles.inputContainerFocused,
      error ? styles.inputContainerError : null,
    ];

    return (
      <View style={styles.wrapper}>
        {label && (
          <View style={styles.labelRow}>
            <Text style={styles.label}>{label}</Text>
            {required && <Text style={styles.required}>*</Text>}
          </View>
        )}
        <View style={containerStyle}>
          <TextInput
            ref={ref}
            style={[styles.input, style]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholderTextColor="#94A3B8"
            {...rest}
          />
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    );
  },
);

Input.displayName = 'Input';
