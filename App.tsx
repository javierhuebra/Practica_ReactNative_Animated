
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Animacion1 from './src/components/Animacion1';
import Animacion2 from './src/components/Animacion2';
import Animacion3 from './src/components/Animacion3';
import Animacion4 from './src/components/Animacion4';
import Animacion5 from './src/components/Animacion5';
import Animacion6 from './src/components/Animacion6';
import Animacion7 from './src/components/Animacion7';


const App = () => {



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='#000'
      />
      <ScrollView style={styles.contenido}>
        <View >
          <Animacion1 />
          <Animacion2 />
          <Animacion3 />
          <Animacion4 />
          <Animacion5 />
          <Animacion6 />
          <Animacion7 />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e7e5fa',
    flex: 1,
    padding: 10
  },
  contenido: {
    backgroundColor: '#000',
    flex: 1
  }

});

export default App;
