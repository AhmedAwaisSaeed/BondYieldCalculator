import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom', 'left', 'right']}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="none"
            scrollEnabled={true}
            nestedScrollEnabled={true}
          >
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom', 'left', 'right']}>
      <View style={styles.staticContent}>{children}</View>
    </SafeAreaView>
  );
};
