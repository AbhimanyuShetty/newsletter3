import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default class Weather extends React.Component {
  constructor(){
  super();
  this.state ={
    weather:''
    }
}
componentDidMount = () => { this.getweather(); };
  getweather = async () => {
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
    return fetch(url)
      .then((response) => response.json())
      .then((responsejson) => {
        this.setState({ weather: responsejson });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    if (this.state.weather === '') {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Weather Forecast</Text>
          <Text style={styles.text}>{this.state.weather.main.temp}&deg;C</Text>
          <Text style={styles.text}>Weather:
            {this.state.weather.weather[0].description}
          </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 100,
    fontSize: 50,
    marginLeft: 100,
  },
  text: {
    marginTop: 100,
    fontSize: 25,
    marginLeft: 100,
  },
});
