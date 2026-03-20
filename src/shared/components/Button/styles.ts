import { StyleSheet } from 'react-native';
import { Colors } from '@/shared/theme/colors';
import { BorderRadius, Spacing } from '@/shared/theme/spacing';

export const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BorderRadius.md,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },

  // Variants
  primary: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.secondary,
    borderColor: Colors.secondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: Colors.primary,
  },
  ghost: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },

  // Sizes
  sm: {
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.md,
    minHeight: 36,
  },
  md: {
    paddingVertical: Spacing.sm + 2,
    paddingHorizontal: Spacing.lg,
    minHeight: 48,
  },
  lg: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    minHeight: 56,
  },

  fullWidth: {
    width: '100%',
  },

  disabled: {
    opacity: 0.5,
  },

  // Labels
  labelPrimary: {
    color: Colors.text.inverse,
  },
  labelSecondary: {
    color: Colors.text.inverse,
  },
  labelOutline: {
    color: Colors.primary,
  },
  labelGhost: {
    color: Colors.primary,
  },

  labelSm: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
  },
  labelMd: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
  labelLg: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 24,
  },

  loader: {
    marginRight: Spacing.sm,
  },
});
