import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  BondCalculator: undefined;
  // Future screens: Results, CashFlow, Settings
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
