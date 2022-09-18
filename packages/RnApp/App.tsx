/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useData} from '@mfe/shared';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const data = useData();

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>First Stop</Text>
          {data.map(d => {
            return <Text key={d.id}>{d.title}</Text>;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
