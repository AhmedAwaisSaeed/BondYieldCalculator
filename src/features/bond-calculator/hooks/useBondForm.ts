import { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useBondFormStore } from '../store/useBondFormStore';
import { validateBondForm, isFormValid } from '../utils/validation';
import type { FormErrors } from '../utils/validation';

export const useBondForm = () => {
  const { t } = useTranslation();
  const { form, setField, setFrequency, resetForm } = useBondFormStore();
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  // Refs for keyboard chain (Tab focus next)
  const couponRateRef = useRef<TextInput>(null);
  const marketPriceRef = useRef<TextInput>(null);
  const yearsToMaturityRef = useRef<TextInput>(null);

  const validateField = (field: keyof FormErrors, value: string) => {
    if (!submitted) return;
    const updatedForm = { ...form, [field]: value };
    const newErrors = validateBondForm(updatedForm, t);
    setErrors(prev => ({
      ...prev,
      [field]: newErrors[field],
    }));
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setField(field, value);
    validateField(field as keyof FormErrors, value);
  };

  const handleSubmit = (): boolean => {
    setSubmitted(true);
    const newErrors = validateBondForm(form, t);
    setErrors(newErrors);
    return isFormValid(newErrors);
  };

  const handleReset = () => {
    resetForm();
    setErrors({});
    setSubmitted(false);
  };

  return {
    form,
    errors,
    setFrequency,
    handleChange,
    handleSubmit,
    handleReset,
    // Refs for keyboard chain
    refs: {
      couponRate: couponRateRef,
      marketPrice: marketPriceRef,
      yearsToMaturity: yearsToMaturityRef,
    },
  };
};
