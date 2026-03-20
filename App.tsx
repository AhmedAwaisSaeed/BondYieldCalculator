import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { Provider } from 'react-redux';
import { store } from '@/store/rtk/store';
import { RootNavigator } from '@/navigation/RootNavigator';

// Initialise i18n before the first render
import '@/localization/i18n';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <Provider store={store}>
        <SafeAreaProvider>
          <KeyboardProvider>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
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
