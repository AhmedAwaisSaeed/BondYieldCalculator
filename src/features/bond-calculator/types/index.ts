export type CouponFrequency = 'annual' | 'semi-annual';

export interface BondInput {
  faceValue: string;
  couponRate: string;
  marketPrice: string;
  yearsToMaturity: string;
  couponFrequency: CouponFrequency;
}

export interface BondResult {
  currentYield: number;
  ytm: number;
  totalInterest: number;
  premiumDiscount: number;
}

export interface CashFlowEntry {
  period: number;
  paymentDate: string;
  couponPayment: number;
  cumulativeInterest: number;
  remainingPrincipal: number;
}
