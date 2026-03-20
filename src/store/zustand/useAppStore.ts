import { I18nManager } from 'react-native';
import { create } from 'zustand';
import i18n from '@/localization/i18n';

type Language = 'en' | 'ar';

interface AppState {
  language: Language;
  isRTL: boolean;
}

interface AppActions {
  setLanguage: (language: Language) => void;
}

type AppStore = AppState & AppActions;

export const useAppStore = create<AppStore>(set => ({
  language: 'en',
  isRTL: false,

  setLanguage: (language: Language) => {
    const isRTL = language === 'ar';
    i18n.changeLanguage(language);
    I18nManager.forceRTL(isRTL);
    set({ language, isRTL });
  },
}));
