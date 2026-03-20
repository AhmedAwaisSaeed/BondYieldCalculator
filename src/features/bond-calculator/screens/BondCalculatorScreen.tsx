import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ScreenWrapper } from '@/shared/components/ScreenWrapper';
import { Button } from '@/shared/components/Button';
import { Input } from '@/shared/components/Input';
import { Colors } from '@/shared/theme/colors';
import { Spacing, BorderRadius } from '@/shared/theme/spacing';
import { Typography } from '@/shared/typography';
import { useAppStore } from '@/store/zustand/useAppStore';

export const BondCalculatorScreen = () => {
  const { t } = useTranslation();
  const { language, setLanguage, isInitialized } = useAppStore();

  // Don't render until app is properly initialized
  if (!isInitialized) {
    return null;
  }

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

      {/* Sample Inputs (Phase 1 preview — wired in Phase 2) */}
      <View style={styles.formSection}>
        <Input
          label={t('bondCalculator.faceValue')}
          placeholder={t('bondCalculator.faceValuePlaceholder')}
          keyboardType="numeric"
          required
          editable={false}
        />
        <Input
          label={t('bondCalculator.couponRate')}
          placeholder={t('bondCalculator.couponRatePlaceholder')}
          keyboardType="numeric"
          required
          editable={false}
        />
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <Button
          label={t('common.calculate')}
          variant="primary"
          fullWidth
          disabled
        />
        <Button
          label={t('common.reset')}
          variant="outline"
          fullWidth
          style={styles.resetButton}
          disabled
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
