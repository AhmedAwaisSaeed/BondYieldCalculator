import React from 'react';
import { I18nManager, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import type { CustomHeaderProps } from './types';

export const CustomHeader = ({
  title,
  onBackPress,
  showBackButton = true,
}: CustomHeaderProps) => {
  const isRTL = I18nManager.isRTL;
  const backIcon = isRTL ? '→' : '←';

  return (
    <View style={styles.header}>
      {showBackButton ? (
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBackPress}
          activeOpacity={0.7}
        >
          <Text style={styles.backButtonText}>{backIcon}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.spacer} />
      )}
      
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
      
      <View style={styles.spacer} />
    </View>
  );
};