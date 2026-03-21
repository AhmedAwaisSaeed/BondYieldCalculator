import type { BondInput, CashFlowEntry, CouponFrequency } from '../types';

/**
 * Generate payment dates based on start date and frequency
 */
const generatePaymentDate = (
  startDate: Date,
  periodNumber: number,
  frequency: CouponFrequency
): string => {
  const monthsPerPayment = frequency === 'annual' ? 12 : 6;
  const paymentDate = new Date(startDate);
  paymentDate.setMonth(paymentDate.getMonth() + periodNumber * monthsPerPayment);
  
  return paymentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

/**
 * Calculate cash flow schedule for a bond
 */
export const calculateCashFlowSchedule = (
  input: BondInput,
  startDate: Date = new Date()
): CashFlowEntry[] => {
  const faceValue = Number(input.faceValue);
  const couponRate = Number(input.couponRate);
  const yearsToMaturity = Number(input.yearsToMaturity);
  const { couponFrequency } = input;

  const paymentsPerYear = couponFrequency === 'annual' ? 1 : 2;
  const totalPayments = yearsToMaturity * paymentsPerYear;
  const couponPayment = (faceValue * couponRate) / 100 / paymentsPerYear;

  const cashFlowEntries: CashFlowEntry[] = [];
  let cumulativeInterest = 0;

  // Generate coupon payments
  for (let period = 1; period <= totalPayments; period++) {
    const paymentDate = generatePaymentDate(startDate, period, couponFrequency);
    cumulativeInterest += couponPayment;
    
    // For the final payment, add the principal repayment
    const isMaturity = period === totalPayments;
    const totalPaymentAmount = isMaturity ? couponPayment + faceValue : couponPayment;
    const remainingPrincipal = isMaturity ? 0 : faceValue;

    cashFlowEntries.push({
      period,
      paymentDate,
      couponPayment: Number(totalPaymentAmount.toFixed(2)),
      cumulativeInterest: Number(cumulativeInterest.toFixed(2)),
      remainingPrincipal: Number(remainingPrincipal.toFixed(2)),
    });
  }

  return cashFlowEntries;
};

/**
 * Calculate summary statistics for cash flow
 */
export const calculateCashFlowSummary = (cashFlowEntries: CashFlowEntry[]) => {
  if (!cashFlowEntries || cashFlowEntries.length === 0) {
    return {
      totalCashFlow: 0,
      totalCouponPayments: 0,
      principalRepayment: 0,
      numberOfPayments: 0,
    };
  }

  const totalCashFlow = cashFlowEntries.reduce(
    (sum, entry) => sum + entry.couponPayment,
    0
  );
  
  // Calculate principal repayment from the difference in remaining principal
  const firstEntry = cashFlowEntries[0];
  const lastEntry = cashFlowEntries[cashFlowEntries.length - 1];
  const principalRepayment = firstEntry.remainingPrincipal - lastEntry.remainingPrincipal;
  
  const totalCouponPayments = cashFlowEntries.reduce(
    (sum, entry, index) => {
      // Don't count principal repayment in the last payment
      const isLastPayment = index === cashFlowEntries.length - 1;
      const couponOnly = isLastPayment 
        ? entry.couponPayment - principalRepayment 
        : entry.couponPayment;
      return sum + couponOnly;
    },
    0
  );

  return {
    totalCashFlow: Number(totalCashFlow.toFixed(2)),
    totalCouponPayments: Number(totalCouponPayments.toFixed(2)),
    principalRepayment: Number(principalRepayment.toFixed(2)),
    numberOfPayments: cashFlowEntries.length,
  };
};