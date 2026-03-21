import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import type { CashFlowEntry } from '../../types';
import { styles } from './styles';
import type { CashFlowTableProps } from './types';

const TableHeader = () => {
  const { t } = useTranslation();
  
  return (
    <View style={styles.header}>
      <View style={styles.headerRow}>
        <View style={[styles.headerCell, styles.periodCell]}>
          <Text style={styles.headerText}>
            {t('bondCalculator.cashFlow.period')}
          </Text>
        </View>
        <View style={[styles.headerCell, styles.dateCell]}>
          <Text style={styles.headerText}>
            {t('bondCalculator.cashFlow.paymentDate')}
          </Text>
        </View>
        <View style={[styles.headerCell, styles.amountCell]}>
          <Text style={styles.headerText}>
            {t('bondCalculator.cashFlow.couponPayment')}
          </Text>
        </View>
        <View style={[styles.headerCell, styles.amountCell]}>
          <Text style={styles.headerText}>
            {t('bondCalculator.cashFlow.cumulativeInterest')}
          </Text>
        </View>
        <View style={[styles.headerCell, styles.amountCell]}>
          <Text style={styles.headerText}>
            {t('bondCalculator.cashFlow.remainingPrincipal')}
          </Text>
        </View>
      </View>
    </View>
  );
};

const TableRow = ({ 
  item, 
  index, 
  isLast, 
  isMaturity 
}: { 
  item: CashFlowEntry; 
  index: number; 
  isLast: boolean;
  isMaturity: boolean;
}) => {
  const formatCurrency = (value: number) => `$${value.toLocaleString()}`;

  return (
    <View 
      style={[
        styles.row, 
        isLast && styles.lastRow,
        isMaturity && styles.maturityRow
      ]}
    >
      <View style={[styles.cell, styles.periodCell]}>
        <Text style={[styles.cellText, styles.periodText]}>
          {item.period}
        </Text>
      </View>
      <View style={[styles.cell, styles.dateCell]}>
        <Text style={styles.cellText}>
          {item.paymentDate}
        </Text>
      </View>
      <View style={[styles.cell, styles.amountCell]}>
        <Text style={[styles.cellText, styles.currencyText]}>
          {formatCurrency(item.couponPayment)}
        </Text>
      </View>
      <View style={[styles.cell, styles.amountCell]}>
        <Text style={[styles.cellText, styles.currencyText]}>
          {formatCurrency(item.cumulativeInterest)}
        </Text>
      </View>
      <View style={[styles.cell, styles.amountCell]}>
        <Text style={[styles.cellText, styles.currencyText]}>
          {formatCurrency(item.remainingPrincipal)}
        </Text>
      </View>
    </View>
  );
};

export const CashFlowTable = ({ cashFlowEntries }: CashFlowTableProps) => {
  const { t } = useTranslation();

  if (!cashFlowEntries || cashFlowEntries.length === 0) {
    return (
      <View style={styles.container}>
        <TableHeader />
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>
            {t('common.noData')}
          </Text>
        </View>
      </View>
    );
  }

  const renderItem = ({ item, index }: { item: CashFlowEntry; index: number }) => {
    const isLast = index === cashFlowEntries.length - 1;
    const isMaturity = item.remainingPrincipal === 0;
    return (
      <TableRow
        item={item}
        index={index}
        isLast={isLast}
        isMaturity={isMaturity}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TableHeader />
      <FlatList
        data={cashFlowEntries}
        renderItem={renderItem}
        keyExtractor={(item) => `period-${item.period}`}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      />
    </View>
  );
};