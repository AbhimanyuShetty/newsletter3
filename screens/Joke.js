import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Joke extends React.Component {
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
          Q: Why was the birthday cake as hard as a rock? Because it was marble cake!
        </Text>

        <Text style={styles.text}>
          Q: What sort of birthday cake do ghosts prefer? An "I scream" cake
        </Text>

        <Text style={styles.text}>
          Q: Did you hear about the love affair between sugar and cream?  It was icing on the cake.
        </Text>

        <Text style={styles.text}>
          Q: Why did the birthday cake visit the psychologist? A: Because it was feeling crumby.
        </Text>

        <Text style={styles.text}>
          Q: How do pickles celebrate their birthdays? A: They relish the moment.
        </Text>

        <Text style={styles.text}>
          Q: What goes up and never comes down? A: Your age!
        </Text>

        <Text style={styles.text}>
          Q: It's easier to remember your age if you don't change it every year.
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
