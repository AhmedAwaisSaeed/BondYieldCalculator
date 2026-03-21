import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BondResult } from '@/features/bond-calculator/types';

export type RootStackParamList = {
  BondCalculator: undefined;
  Results: { results: BondResult };
  // Future screens: CashFlow, Settings
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
