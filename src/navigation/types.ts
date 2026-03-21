import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BondResult, BondInput } from '@/features/bond-calculator/types';

export type RootStackParamList = {
  BondCalculator: undefined;
  Results: { results: BondResult; bondInput: BondInput };
  CashFlow: { bondInput: BondInput };
  // Future screens: Settings
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
