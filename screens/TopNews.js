import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';


export default class TopNews extends React.Component {
  constructor(){
    super();
    this.state = {
      like:0,
      dislike:0
    }
  }
  render(){
    return(
      <View>
    <Text style={styles.text}> TOP NEWS </Text>
       
      </View>
    )
  }
} 
const styles = StyleSheet.create({
  text : {
    textAlign : 'center',
    color : 'black'
  }
})