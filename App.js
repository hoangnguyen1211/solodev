import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { InitialNavigator } from './src/navigations';
import configureStore from './src/redux/stores';
import { Provider } from 'react-redux';

const store = configureStore();
const AppContainer = createAppContainer(InitialNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.conatainer}>
        <AppContainer />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1
  }
});

export default App;
