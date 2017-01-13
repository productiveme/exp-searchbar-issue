import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SearchBar } from 'react-native-elements';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          onChangeText={search => console.log(search)}
          placeholder="Type Here..."
          lightTheme
          round
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(App);
