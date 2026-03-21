import { StyleSheet } from 'react-native';
import { Colors } from '@/shared/theme/colors';
import { BorderRadius, Spacing } from '@/shared/theme/spacing';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: Spacing.md,
  },
  header: {
    marginBottom: Spacing.lg,
  },
  subtitle: {
    marginTop: Spacing.xs,
    textAlign: 'left',
  },
  summaryCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    padding: Spacing.lg,
    marginBottom: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: Spacing.md,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  summaryRowLast: {
    marginBottom: 0,
  },
  summaryLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.text.secondary,
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.secondary,
  },
  tableContainer: {
    flex: 1,
    marginBottom: Spacing.lg,
  },
  tableTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: Spacing.md,
  },
  actions: {
    gap: Spacing.sm,
  },
});