import type { CouponFrequency } from '../../types';

export interface FrequencySelectorProps {
  value: CouponFrequency;
  onChange: (value: CouponFrequency) => void;
  label: string;
}
