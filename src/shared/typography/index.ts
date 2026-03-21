import { I18nManager, StyleSheet, TextStyle } from 'react-native';
import { Colors } from '@/shared/theme/colors';

const base: TextStyle = {
  color: Colors.text.primary,
};

export const Typography = StyleSheet.create({
  heading: {
    ...base,
    fontSize: 28,
    fontWeight: '700',
    lineHeight: I18nManager.isRTL ? 60 : 36,
    letterSpacing: -0.5,
    textAlign:"left",
  },
  subheading: {
    ...base,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    letterSpacing: -0.3,
  },
  title: {
    ...base,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  },
  body: {
    ...base,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  bodyMedium: {
    ...base,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  bodySmall: {
    ...base,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: Colors.text.secondary,
  },
  label: {
    ...base,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: Colors.text.secondary,
  },
  caption: {
    ...base,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    color: Colors.text.secondary,
  },
  captionMedium: {
    ...base,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: Colors.text.secondary,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.2,
  },
  buttonLabelSm: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 0.2,
  },
});

export type TypographyVariant = keyof typeof Typography;
