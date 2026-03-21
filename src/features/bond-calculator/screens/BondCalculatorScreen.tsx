import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { ScreenWrapper } from '@/shared/components/ScreenWrapper';
import { Button } from '@/shared/components/Button';
import { Input } from '@/shared/components/Input';
import { Colors } from '@/shared/theme/colors';
import { BorderRadius, Spacing } from '@/shared/theme/spacing';
import { Typography } from '@/shared/typography';
import { useAppStore } from '@/store/zustand/useAppStore';
import type { RootStackNavigationProp } from '@/navigation/types';
import { FrequencySelector } from '../components/FrequencySelector';
import { useBondForm } from '../hooks/useBondForm';
import { calculateBondMetrics } from '../utils/calculations';

export const BondCalculatorScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<RootStackNavigationProp>();
  const { language, setLanguage, isInitialized } = useAppStore();
  const { form, errors, setFrequency, handleChange, handleSubmit, handleReset, refs } =
    useBondForm();

  if (!isInitialized) {
    return null;
  }

  const onCalculate = () => {
    const valid = handleSubmit();
    if (valid) {
      const results = calculateBondMetrics(form);
      navigation.navigate('Results', { results });
    }
  };

  return (
    <ScreenWrapper>
      {/* Header */}
      <View style={styles.header}>
        <Text style={Typography.heading}>{t('bondCalculator.title')}</Text>
        <Text style={[Typography.bodySmall, styles.subtitle]}>
          {t('bondCalculator.subtitle')}
        </Text>
      </View>

      {/* Language Switcher */}
      <View style={styles.languageSwitcher}>
        <Text style={[Typography.label, styles.languageLabel]}>
          {t('common.language')}
        </Text>
        <View style={styles.languageButtons}>
          <TouchableOpacity
            style={[
              styles.languageChip,
              language === 'en' && styles.languageChipActive,
            ]}
            onPress={() => setLanguage('en')}
          >
            <Text
              style={[
                styles.languageChipText,
                language === 'en' && styles.languageChipTextActive,
              ]}
            >
              {t('common.english')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.languageChip,
              language === 'ar' && styles.languageChipActive,
            ]}
            onPress={() => setLanguage('ar')}
          >
            <Text
              style={[
                styles.languageChipText,
                language === 'ar' && styles.languageChipTextActive,
              ]}
            >
              {t('common.arabic')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Form */}
      <View style={styles.formSection}>
        {/* Face Value */}
        <Input
          label={t('bondCalculator.faceValue')}
          placeholder={t('bondCalculator.faceValuePlaceholder')}
          keyboardType="numeric"
          returnKeyType="next"
          required
          value={form.faceValue}
          onChangeText={v => handleChange('faceValue', v)}
          error={errors.faceValue}
          onSubmitEditing={() => refs.couponRate.current?.focus()}
        />

        {/* Coupon Rate */}
        <Input
          ref={refs.couponRate}
          label={t('bondCalculator.couponRate')}
          placeholder={t('bondCalculator.couponRatePlaceholder')}
          keyboardType="numeric"
          returnKeyType="next"
          required
          value={form.couponRate}
          onChangeText={v => handleChange('couponRate', v)}
          error={errors.couponRate}
          onSubmitEditing={() => refs.marketPrice.current?.focus()}
        />

        {/* Market Price */}
        <Input
          ref={refs.marketPrice}
          label={t('bondCalculator.marketPrice')}
          placeholder={t('bondCalculator.marketPricePlaceholder')}
          keyboardType="numeric"
          returnKeyType="next"
          required
          value={form.marketPrice}
          onChangeText={v => handleChange('marketPrice', v)}
          error={errors.marketPrice}
          onSubmitEditing={() => refs.yearsToMaturity.current?.focus()}
        />

        {/* Years to Maturity */}
        <Input
          ref={refs.yearsToMaturity}
          label={t('bondCalculator.yearsToMaturity')}
          placeholder={t('bondCalculator.yearsToMaturityPlaceholder')}
          keyboardType="numeric"
          returnKeyType="done"
          required
          value={form.yearsToMaturity}
          onChangeText={v => handleChange('yearsToMaturity', v)}
          error={errors.yearsToMaturity}
        />

        {/* Coupon Frequency */}
        <FrequencySelector
          label={t('bondCalculator.couponFrequency')}
          value={form.couponFrequency}
          onChange={setFrequency}
        />
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <Button
          label={t('common.calculate')}
          variant="primary"
          fullWidth
          onPress={onCalculate}
        />
        <Button
          label={t('common.reset')}
          variant="outline"
          fullWidth
          style={styles.resetButton}
          onPress={handleReset}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: Spacing.xl,
  },
  subtitle: {
    marginTop: Spacing.xs,
    textAlign: 'left',
  },
  languageSwitcher: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginBottom: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  languageLabel: {
    marginBottom: Spacing.sm,
    textAlign: 'left',
  },
  languageButtons: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  languageChip: {
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.full,
    borderWidth: 1.5,
    borderColor: Colors.border,
    backgroundColor: Colors.background,
  },
  languageChipActive: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight,
  },
  languageChipText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text.secondary,
  },
  languageChipTextActive: {
    color: Colors.primary,
  },
  formSection: {
    marginBottom: Spacing.lg,
  },
  actions: {
    gap: Spacing.sm,
  },
  resetButton: {
    marginTop: Spacing.xs,
  },
});
