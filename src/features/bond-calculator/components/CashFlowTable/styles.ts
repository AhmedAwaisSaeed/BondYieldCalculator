import { StyleSheet } from 'react-native';
import { Colors } from '@/shared/theme/colors';
import { BorderRadius, Spacing } from '@/shared/theme/spacing';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: Colors.surfaceElevated,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  headerRow: {
    flexDirection: 'row',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.xs,
  },
  headerCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xs,
  },
  headerText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  list: {
    maxHeight: 400,
  },
  listContent: {
    paddingBottom: 100, // Allow last row to scroll fully above adjacent content
  },
  row: {
    flexDirection: 'row',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  maturityRow: {
    backgroundColor: Colors.primaryLight,
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xs,
  },
  cellText: {
    fontSize: 13,
    fontWeight: '400',
    color: Colors.text.primary,
    textAlign: 'center',
  },
  periodCell: {
    flex: 0.6,
  },
  dateCell: {
    flex: 1.2,
  },
  amountCell: {
    flex: 1,
  },
  periodText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.primary,
  },
  maturityText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.primary,
  },
  currencyText: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.secondary,
  },
  emptyState: {
    padding: Spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
});