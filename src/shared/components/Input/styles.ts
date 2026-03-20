import { StyleSheet } from 'react-native';
import { Colors } from '@/shared/theme/colors';
import { BorderRadius, Spacing } from '@/shared/theme/spacing';

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Spacing.md,
  },
  labelRow: {
    flexDirection: 'row',
    marginBottom: Spacing.xs,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text.secondary,
    lineHeight: 20,
  },
  required: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.error,
    marginLeft: 2,
    lineHeight: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    minHeight: 52,
  },
  inputContainerFocused: {
    borderColor: Colors.borderFocused,
  },
  inputContainerError: {
    borderColor: Colors.error,
    backgroundColor: Colors.errorLight,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.text.primary,
    lineHeight: 24,
    paddingVertical: Spacing.sm + 2,
  },
  error: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.error,
    marginTop: Spacing.xs,
    lineHeight: 16,
  },
});
