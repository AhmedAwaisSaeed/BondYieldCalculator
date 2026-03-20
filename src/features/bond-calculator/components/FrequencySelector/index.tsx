import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import type { CouponFrequency } from '../../types';
import { styles } from './styles';
import type { FrequencySelectorProps } from './types';

const OPTIONS: { value: CouponFrequency; labelKey: string }[] = [
  { value: 'annual', labelKey: 'bondCalculator.annual' },
  { value: 'semi-annual', labelKey: 'bondCalculator.semiAnnual' },
];

export const FrequencySelector = ({
  value,
  onChange,
  label,
}: FrequencySelectorProps) => {
  const { t } = useTranslation();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.optionsRow}>
        {OPTIONS.map(option => {
          const isActive = value === option.value;
          return (
            <TouchableOpacity
              key={option.value}
              style={[styles.option, isActive && styles.optionActive]}
              onPress={() => onChange(option.value)}
              activeOpacity={0.75}
            >
              <Text
                style={[
                  styles.optionText,
                  isActive && styles.optionTextActive,
                ]}
              >
                {t(option.labelKey)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
