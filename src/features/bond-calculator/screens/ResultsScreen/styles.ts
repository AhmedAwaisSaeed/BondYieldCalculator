import { StyleSheet } from 'react-native';
import { Colors } from '@/shared/theme/colors';
import { BorderRadius, Spacing } from '@/shared/theme/spacing';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: Spacing.md,
  },
  header: {
    marginBottom: Spacing.xl,
  },
  subtitle: {
    marginTop: Spacing.xs,
    textAlign: 'left',
  },
  resultsContainer: {
    gap: Spacing.md,
    marginBottom: Spacing.xl,
  },
  resultCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  resultRowLast: {
    marginBottom: 0,
  },
  resultLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.text.secondary,
    flex: 1,
    textAlign: 'left',
  },
  resultValue: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.primary,
    textAlign: 'right',
  },
  percentageValue: {
    color: Colors.primary,
  },
  currencyValue: {
    color: Colors.secondary,
  },
  premiumValue: {
    color: Colors.success,
  },
  discountValue: {
    color: Colors.error,
  },
  atParValue: {
    color: Colors.text.secondary,
  },
  statusBadge: {
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.sm,
    borderRadius: BorderRadius.sm,
    marginLeft: Spacing.sm,
  },
  premiumBadge: {
    backgroundColor: Colors.successLight,
  },
  discountBadge: {
    backgroundColor: Colors.errorLight,
  },
  atParBadge: {
    backgroundColor: Colors.surfaceElevated,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  premiumText: {
    color: Colors.success,
  },
  discountText: {
    color: Colors.error,
  },
  atParText: {
    color: Colors.text.secondary,
  },
  actions: {
    gap: Spacing.sm,
  },
});