export const Colors = {
  primary: '#2563EB',
  primaryLight: '#DBEAFE',
  primaryDark: '#1D4ED8',

  secondary: '#10B981',
  secondaryLight: '#D1FAE5',

  background: '#F8FAFC',
  surface: '#FFFFFF',
  surfaceElevated: '#F1F5F9',

  border: '#E2E8F0',
  borderFocused: '#2563EB',

  text: {
    primary: '#1E293B',
    secondary: '#64748B',
    placeholder: '#94A3B8',
    inverse: '#FFFFFF',
    disabled: '#CBD5E1',
    error: '#EF4444',
    success: '#10B981',
  },

  error: '#EF4444',
  errorLight: '#FEE2E2',

  success: '#10B981',
  successLight: '#D1FAE5',

  warning: '#F59E0B',
  warningLight: '#FEF3C7',

  disabled: '#CBD5E1',
  overlay: 'rgba(0, 0, 0, 0.5)',
} as const;

export type ColorKeys = keyof typeof Colors;
