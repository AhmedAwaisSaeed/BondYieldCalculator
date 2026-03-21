import type { BondInput, BondResult, CouponFrequency } from '../types';

/**
 * Converts string inputs to numbers for calculations
 */
interface BondInputNumbers {
  faceValue: number;
  couponRate: number;
  marketPrice: number;
  yearsToMaturity: number;
  couponFrequency: CouponFrequency;
}

const parseInputs = (input: BondInput): BondInputNumbers => ({
  faceValue: Number(input.faceValue),
  couponRate: Number(input.couponRate),
  marketPrice: Number(input.marketPrice),
  yearsToMaturity: Number(input.yearsToMaturity),
  couponFrequency: input.couponFrequency,
});

/**
 * Calculate Current Yield
 * Formula: (Annual Coupon Payment / Market Price) * 100
 */
export const calculateCurrentYield = (
  faceValue: number,
  couponRate: number,
  marketPrice: number
): number => {
  const annualCouponPayment = (faceValue * couponRate) / 100;
  return (annualCouponPayment / marketPrice) * 100;
};

/**
 * Calculate Yield to Maturity (YTM) using approximation formula
 * YTM ≈ [C + (F - P) / n] / [(F + P) / 2] * 100
 * Where:
 * C = Annual coupon payment
 * F = Face value
 * P = Market price
 * n = Years to maturity
 */
export const calculateYTM = (
  faceValue: number,
  couponRate: number,
  marketPrice: number,
  yearsToMaturity: number
): number => {
  const annualCouponPayment = (faceValue * couponRate) / 100;
  const numerator = annualCouponPayment + (faceValue - marketPrice) / yearsToMaturity;
  const denominator = (faceValue + marketPrice) / 2;
  return (numerator / denominator) * 100;
};

/**
 * Calculate Total Interest Earned over the life of the bond
 */
export const calculateTotalInterest = (
  faceValue: number,
  couponRate: number,
  yearsToMaturity: number,
  couponFrequency: CouponFrequency
): number => {
  const paymentsPerYear = couponFrequency === 'annual' ? 1 : 2;
  const totalPayments = yearsToMaturity * paymentsPerYear;
  const paymentAmount = (faceValue * couponRate) / 100 / paymentsPerYear;
  return paymentAmount * totalPayments;
};

/**
 * Calculate Premium/Discount indicator
 * Returns: positive = premium, negative = discount, 0 = at par
 */
export const calculatePremiumDiscount = (
  faceValue: number,
  marketPrice: number
): number => {
  return marketPrice - faceValue;
};

/**
 * Get premium/discount status as string
 */
export const getPremiumDiscountStatus = (
  premiumDiscount: number
): 'premium' | 'discount' | 'atPar' => {
  if (premiumDiscount > 0) return 'premium';
  if (premiumDiscount < 0) return 'discount';
  return 'atPar';
};

/**
 * Main calculation function that computes all bond metrics
 */
export const calculateBondMetrics = (input: BondInput): BondResult => {
  const {
    faceValue,
    couponRate,
    marketPrice,
    yearsToMaturity,
    couponFrequency,
  } = parseInputs(input);

  const currentYield = calculateCurrentYield(faceValue, couponRate, marketPrice);
  const ytm = calculateYTM(faceValue, couponRate, marketPrice, yearsToMaturity);
  const totalInterest = calculateTotalInterest(
    faceValue,
    couponRate,
    yearsToMaturity,
    couponFrequency
  );
  const premiumDiscount = calculatePremiumDiscount(faceValue, marketPrice);

  return {
    currentYield: Number(currentYield.toFixed(2)),
    ytm: Number(ytm.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2)),
    premiumDiscount: Number(premiumDiscount.toFixed(2)),
  };
};