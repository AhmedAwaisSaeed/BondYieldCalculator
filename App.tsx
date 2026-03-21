import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootNavigator } from '@/navigation/RootNavigator';

// Initialise i18n before the first render
import '@/localization/i18n';

const App = () => {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    const initializeApp = async () => {
      try {
        const { useAppStore } = require('@/store/zustand/useAppStore');
        await useAppStore.getState().initializeApp();
        setIsReady(true);
      } catch (error) {
        console.error('Failed to initialize app:', error);
        setIsReady(true); // Still show the app even if initialization fails
      }
    };

    initializeApp();
  }, []);

  if (!isReady) {
    return null; // Or a loading screen
  }

  return (
    <GestureHandlerRootView style={styles.root}>
        <SafeAreaProvider>
          <StatusBar 
            barStyle="dark-content" 
            backgroundColor="transparent" 
            translucent={false}
          />
          <RootNavigator />
        </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
});

export default App;
