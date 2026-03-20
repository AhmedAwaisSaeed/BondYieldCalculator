import type { BondInput } from '../types';
import { BOND_CONSTANTS } from './constants';

export type FormErrors = Partial<Record<keyof BondInput, string>>;

type TFunction = (key: string) => string;

const isEmpty = (value: string) => value.trim().length === 0;
const isNotNumeric = (value: string) => isNaN(Number(value)) || value.trim() === '';
const isNotPositive = (value: string) => Number(value) <= 0;

export const validateBondForm = (form: BondInput, t: TFunction): FormErrors => {
  const errors: FormErrors = {};

  // Face Value
  if (isEmpty(form.faceValue)) {
    errors.faceValue = t('bondCalculator.validation.required');
  } else if (isNotNumeric(form.faceValue)) {
    errors.faceValue = t('bondCalculator.validation.numeric');
  } else if (isNotPositive(form.faceValue)) {
    errors.faceValue = t('bondCalculator.validation.positive');
  }

  // Coupon Rate
  if (isEmpty(form.couponRate)) {
    errors.couponRate = t('bondCalculator.validation.required');
  } else if (isNotNumeric(form.couponRate)) {
    errors.couponRate = t('bondCalculator.validation.numeric');
  } else if (isNotPositive(form.couponRate)) {
    errors.couponRate = t('bondCalculator.validation.positive');
  } else if (Number(form.couponRate) > BOND_CONSTANTS.MAX_COUPON_RATE) {
    errors.couponRate = t('bondCalculator.validation.maxRate');
  }

  // Market Price
  if (isEmpty(form.marketPrice)) {
    errors.marketPrice = t('bondCalculator.validation.required');
  } else if (isNotNumeric(form.marketPrice)) {
    errors.marketPrice = t('bondCalculator.validation.numeric');
  } else if (isNotPositive(form.marketPrice)) {
    errors.marketPrice = t('bondCalculator.validation.positive');
  }

  // Years to Maturity
  if (isEmpty(form.yearsToMaturity)) {
    errors.yearsToMaturity = t('bondCalculator.validation.required');
  } else if (isNotNumeric(form.yearsToMaturity)) {
    errors.yearsToMaturity = t('bondCalculator.validation.numeric');
  } else if (
    Number(form.yearsToMaturity) < BOND_CONSTANTS.MIN_YEARS ||
    Number(form.yearsToMaturity) > BOND_CONSTANTS.MAX_YEARS
  ) {
    errors.yearsToMaturity = t('bondCalculator.validation.maxYears');
  }

  return errors;
};

export const isFormValid = (errors: FormErrors): boolean =>
  Object.keys(errors).length === 0;
