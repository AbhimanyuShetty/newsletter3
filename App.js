import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen' 
import Horoscope from './screens/Horoscope'
import Joke from './screens/Joke'
import Weather from './screens/Weather'
import TopNews from './screens/TopNews'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {  
    return (
      <View> 
  <AppContainer/>
      </View>
    ); 
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Joke : Joke, 
  Horoscope: Horoscope,
  Weather : Weather,
  TopNews : TopNews
})

const AppContainer = createAppContainer(AppNavigator) 