import { I18nManager } from 'react-native';
import { create } from 'zustand';
import RNRestart from 'react-native-restart';
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

// Initialize RTL state from I18nManager
const initialRTL = I18nManager.isRTL;
const initialLanguage: Language = initialRTL ? 'ar' : 'en';

export const useAppStore = create<AppStore>(set => ({
  language: initialLanguage,
  isRTL: initialRTL,

  setLanguage: (language: Language) => {
    const isRTL = language === 'ar';
    const currentRTL = I18nManager.isRTL;
    
    i18n.changeLanguage(language);
    set({ language, isRTL });
    
    // If RTL state needs to change, force it and automatically restart
    if (isRTL !== currentRTL) {
      I18nManager.forceRTL(isRTL);
      
      // Small delay to ensure state is saved before restart
      setTimeout(() => {
        RNRestart.restart();
      }, 100);
    }
  },
}));
