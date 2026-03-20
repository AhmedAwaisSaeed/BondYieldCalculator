import { Alert, I18nManager } from 'react-native';
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
    
    // If RTL state needs to change, force it and show restart prompt
    if (isRTL !== currentRTL) {
      I18nManager.forceRTL(isRTL);
      
      Alert.alert(
        i18n.t('common.restartRequired'),
        i18n.t('common.restartMessage'),
        [
          {
            text: i18n.t('common.ok'),
            style: 'default',
          },
        ]
      );
    }
    
    set({ language, isRTL });
  },
}));
