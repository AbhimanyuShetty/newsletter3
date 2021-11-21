import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Horoscope extends React.Component {
  constructor() {
    super();
    this.state = {
      like: 0,
      dislike: 0,
    };
  }
  render() {
    return (
      <View>
        <Text style={styles.text}>
          {' '}
          Aries dates: March 21 – April 19
          Taurus dates: April 20 – May 20
          Gemini dates: May 21 – June 20 
          Cancer dates: June 21 – July 22 Leo
          dates: July 23 – August 22 
          Virgo dates: August 23 – September 22 
          Libra dates: September 23 – October 22 
          Scorpio dates: October 23 – November 21 
          Sagittarius dates: November 22 – December 21 
          Capricorn dates:December 22 – January 19
          Aquarius dates: January 20 – February 18
          Pisces dates:February 19 – March 20
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'black',
  },
});
