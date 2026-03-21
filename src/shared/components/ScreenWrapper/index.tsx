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
  /**
   * When true, removes default padding from content.
   * Useful when using custom headers or full-width content.
   */
  noPadding?: boolean;
}

export const ScreenWrapper = ({
  children,
  scrollable = true,
  noPadding = false,
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
            contentContainerStyle={noPadding ? styles.scrollContentNoPadding : styles.scrollContent}
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
      <View style={noPadding ? styles.staticContentNoPadding : styles.staticContent}>
        {children}
      </View>
    </SafeAreaView>
  );
};
