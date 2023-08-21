import React from 'react';
import {View, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


const App = () => {
  return (
    <SafeAreaView>
    <View style={{backgroundColor:'pink'}}>
     <Text>
     current weather
     </Text>
     </View>
    </SafeAreaView>
     
  )

}

export default App