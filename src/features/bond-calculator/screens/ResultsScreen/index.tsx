import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import { ScreenWrapper, CustomHeader, Button } from '@/shared/components';
import { Typography } from '@/shared/typography';
import type { RootStackParamList } from '@/navigation/types';
import { getPremiumDiscountStatus } from '../../utils/calculations';
import { styles } from './styles';

type ResultsScreenRouteProp = RouteProp<RootStackParamList, 'Results'>;

export const ResultsScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const route = useRoute<ResultsScreenRouteProp>();
  const { results } = route.params;

  const premiumDiscountStatus = getPremiumDiscountStatus(results.premiumDiscount);

  const formatPercentage = (value: number) => `${value}%`;
  const formatCurrency = (value: number) => `$${value.toLocaleString()}`;

  const getStatusBadgeStyle = () => {
    switch (premiumDiscountStatus) {
      case 'premium':
        return [styles.statusBadge, styles.premiumBadge];
      case 'discount':
        return [styles.statusBadge, styles.discountBadge];
      case 'atPar':
        return [styles.statusBadge, styles.atParBadge];
    }
  };

  const getStatusTextStyle = () => {
    switch (premiumDiscountStatus) {
      case 'premium':
        return [styles.statusText, styles.premiumText];
      case 'discount':
        return [styles.statusText, styles.discountText];
      case 'atPar':
        return [styles.statusText, styles.atParText];
    }
  };

  const getPremiumDiscountValueStyle = () => {
    switch (premiumDiscountStatus) {
      case 'premium':
        return [styles.resultValue, styles.premiumValue];
      case 'discount':
        return [styles.resultValue, styles.discountValue];
      case 'atPar':
        return [styles.resultValue, styles.atParValue];
    }
  };

  return (
    <ScreenWrapper scrollable={false} noPadding={true}>
      {/* Custom Header */}
      <CustomHeader
        title={t('bondCalculator.results.title')}
        onBackPress={() => navigation.goBack()}
      />
      
      {/* Content */}
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={Typography.heading}>{t('bondCalculator.results.title')}</Text>
          <Text style={[Typography.bodySmall, styles.subtitle]}>
            {t('bondCalculator.results.subtitle')}
          </Text>
        </View>

      {/* Results */}
      <View style={styles.resultsContainer}>
        {/* Current Yield */}
        <View style={styles.resultCard}>
          <View style={[styles.resultRow, styles.resultRowLast]}>
            <Text style={styles.resultLabel}>
              {t('bondCalculator.results.currentYield')}
            </Text>
            <Text style={[styles.resultValue, styles.percentageValue]}>
              {formatPercentage(results.currentYield)}
            </Text>
          </View>
        </View>

        {/* Yield to Maturity */}
        <View style={styles.resultCard}>
          <View style={[styles.resultRow, styles.resultRowLast]}>
            <Text style={styles.resultLabel}>
              {t('bondCalculator.results.ytm')}
            </Text>
            <Text style={[styles.resultValue, styles.percentageValue]}>
              {formatPercentage(results.ytm)}
            </Text>
          </View>
        </View>

        {/* Total Interest */}
        <View style={styles.resultCard}>
          <View style={[styles.resultRow, styles.resultRowLast]}>
            <Text style={styles.resultLabel}>
              {t('bondCalculator.results.totalInterest')}
            </Text>
            <Text style={[styles.resultValue, styles.currencyValue]}>
              {formatCurrency(results.totalInterest)}
            </Text>
          </View>
        </View>

        {/* Premium/Discount */}
        <View style={styles.resultCard}>
          <View style={[styles.resultRow, styles.resultRowLast]}>
            <Text style={styles.resultLabel}>
              {t('bondCalculator.results.premiumDiscount')}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={getPremiumDiscountValueStyle()}>
                {formatCurrency(Math.abs(results.premiumDiscount))}
              </Text>
              <View style={getStatusBadgeStyle()}>
                <Text style={getStatusTextStyle()}>
                  {t(`bondCalculator.results.${premiumDiscountStatus}`)}
                </Text>
              </View>
            </View>
          </View>
        </View>
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