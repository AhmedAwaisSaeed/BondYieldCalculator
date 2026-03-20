import { I18nManager } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import RNRestart from 'react-native-restart';
import i18n from '@/localization/i18n';

type Language = 'en' | 'ar';

interface AppState {
  language: Language;
  isRTL: boolean;
  isInitialized: boolean;
}

interface AppActions {
  setLanguage: (language: Language) => void;
  initializeApp: () => Promise<void>;
}

type AppStore = AppState & AppActions;

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      language: 'en',
      isRTL: false,
      isInitialized: false,

      initializeApp: async () => {
        const state = get();
        const currentRTL = I18nManager.isRTL;
        
        // If persisted language doesn't match RTL state, sync them
        if (state.isRTL !== currentRTL) {
          const correctLanguage: Language = currentRTL ? 'ar' : 'en';
          i18n.changeLanguage(correctLanguage);
          set({ 
            language: correctLanguage, 
            isRTL: currentRTL, 
            isInitialized: true 
          });
        } else {
          // Sync i18n with persisted language
          i18n.changeLanguage(state.language);
          set({ isInitialized: true });
        }
      },

      setLanguage: (language: Language) => {
        const isRTL = language === 'ar';
        const currentRTL = I18nManager.isRTL;
        
        // Update i18n immediately
        i18n.changeLanguage(language);
        
        // Update store state
        set({ language, isRTL });
        
        // If RTL state needs to change, force it and restart
        if (isRTL !== currentRTL) {
          I18nManager.forceRTL(isRTL);
          
          // Small delay to ensure state is persisted before restart
          setTimeout(() => {
            RNRestart.restart();
          }, 200);
        }
      },
    }),
    {
      name: 'app-store',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ 
        language: state.language, 
        isRTL: state.isRTL 
      }),
    }
  )
);
