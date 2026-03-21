import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import { ScreenWrapper, CustomHeader, Button } from '@/shared/components';
import { Typography } from '@/shared/typography';
import type { RootStackParamList } from '@/navigation/types';
import { CashFlowTable } from '../../components/CashFlowTable';
import { 
  calculateCashFlowSchedule, 
  calculateCashFlowSummary 
} from '../../utils/cashFlowCalculations';
import { styles } from './styles';

type CashFlowScreenRouteProp = RouteProp<RootStackParamList, 'CashFlow'>;

export const CashFlowScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const route = useRoute<CashFlowScreenRouteProp>();
  const { bondInput } = route.params;

  const cashFlowEntries = useMemo(() => {
    return calculateCashFlowSchedule(bondInput);
  }, [bondInput]);

  const summary = useMemo(() => {
    return calculateCashFlowSummary(cashFlowEntries);
  }, [cashFlowEntries]);

  const formatCurrency = (value: number) => `$${value.toLocaleString()}`;

  return (
    <ScreenWrapper scrollable={false} noPadding={true}>
      {/* Custom Header */}
      <CustomHeader
        title={t('bondCalculator.cashFlow.title')}
        onBackPress={() => navigation.goBack()}
      />
      
      {/* Content */}
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={Typography.heading}>
            {t('bondCalculator.cashFlow.title')}
          </Text>
          <Text style={[Typography.bodySmall, styles.subtitle]}>
            {t('bondCalculator.cashFlow.subtitle')}
          </Text>
        </View>

        {/* Summary Card */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>{t('bondCalculator.cashFlow.summary')}</Text>
          
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>{t('bondCalculator.cashFlow.totalCashFlow')}</Text>
            <Text style={styles.summaryValue}>
              {formatCurrency(summary.totalCashFlow)}
            </Text>
          </View>
          
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>{t('bondCalculator.cashFlow.totalCouponPayments')}</Text>
            <Text style={styles.summaryValue}>
              {formatCurrency(summary.totalCouponPayments)}
            </Text>
          </View>
          
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>{t('bondCalculator.cashFlow.principalRepayment')}</Text>
            <Text style={styles.summaryValue}>
              {formatCurrency(Number(bondInput.faceValue))}
            </Text>
          </View>
          
          <View style={[styles.summaryRow, styles.summaryRowLast]}>
            <Text style={styles.summaryLabel}>{t('bondCalculator.cashFlow.numberOfPayments')}</Text>
            <Text style={styles.summaryValue}>
              {summary.numberOfPayments}
            </Text>
          </View>
        </View>

        {/* Cash Flow Table */}
        <View style={styles.tableContainer}>
          <Text style={styles.tableTitle}>{t('bondCalculator.cashFlow.paymentSchedule')}</Text>
          <CashFlowTable cashFlowEntries={cashFlowEntries} />
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <Button
            label={t('common.back')}
            variant="primary"
            fullWidth
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};