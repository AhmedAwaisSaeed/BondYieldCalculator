import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { styles } from './styles';

interface ScreenWrapperProps {
  children: React.ReactNode;
  /**
   * When true, wraps children in a KeyboardAwareScrollView.
   * Set to false for screens that manage their own scroll or have no inputs.
   */
  scrollable?: boolean;
}

export const ScreenWrapper = ({
  children,
  scrollable = true,
}: ScreenWrapperProps) => {
  if (scrollable) {
    return (
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <View style={styles.staticContent}>{children}</View>
    </SafeAreaView>
  );
};
