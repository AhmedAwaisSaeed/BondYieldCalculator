import { StyleSheet } from 'react-native';
import { Colors } from '@/shared/theme/colors';
import { Spacing } from '@/shared/theme/spacing';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: Spacing.md,
    paddingBottom: Spacing.xl, // Extra bottom padding for keyboard
  },
  scrollContentNoPadding: {
    flexGrow: 1,
  },
  staticContent: {
    flex: 1,
    padding: Spacing.md,
  },
  staticContentNoPadding: {
    flex: 1,
  },
});
