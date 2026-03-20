import React from 'react';
import { I18nManager, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { Provider } from 'react-redux';
import { store } from '@/store/rtk/store';
import { RootNavigator } from '@/navigation/RootNavigator';

// Initialise i18n before the first render
import '@/localization/i18n';

const App = () => {
  // Set initial language based on RTL state
  React.useEffect(() => {
    const { useAppStore } = require('@/store/zustand/useAppStore');
    const currentRTL = I18nManager.isRTL;
    const store = useAppStore.getState();
    
    // Sync store with actual RTL state on app start
    if (store.isRTL !== currentRTL) {
      store.setLanguage(currentRTL ? 'ar' : 'en');
    }
  }, []);

  return (
    <GestureHandlerRootView style={styles.root}>
      <Provider store={store}>
        <SafeAreaProvider>
          <KeyboardProvider>
            <StatusBar 
              barStyle="dark-content" 
              backgroundColor="transparent" 
              translucent={false}
            />
            <RootNavigator />
          </KeyboardProvider>
        </SafeAreaProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
});

export default App;
