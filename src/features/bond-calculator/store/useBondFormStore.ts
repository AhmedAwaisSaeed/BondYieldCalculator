import { create } from 'zustand';
import type { BondInput, CouponFrequency } from '../types';

const INITIAL_FORM: BondInput = {
  faceValue: '',
  couponRate: '',
  marketPrice: '',
  yearsToMaturity: '',
  couponFrequency: 'annual',
};

interface BondFormState {
  form: BondInput;
}

interface BondFormActions {
  setField: <K extends keyof BondInput>(field: K, value: BondInput[K]) => void;
  setFrequency: (frequency: CouponFrequency) => void;
  resetForm: () => void;
}

type BondFormStore = BondFormState & BondFormActions;

export const useBondFormStore = create<BondFormStore>(set => ({
  form: INITIAL_FORM,

  setField: (field, value) =>
    set(state => ({ form: { ...state.form, [field]: value } })),

  setFrequency: (frequency: CouponFrequency) =>
    set(state => ({ form: { ...state.form, couponFrequency: frequency } })),

  resetForm: () => set({ form: INITIAL_FORM }),
}));
