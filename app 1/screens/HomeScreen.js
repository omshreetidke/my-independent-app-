import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      like: 0,
      dislike: 0,
    };
  }
  likeCount = () => {
    // add code here.
    this.setState({ like: this.state.like + 1 });
  };
  dislikeCount = () => {
    // add code here.
    this.setState({ dislike: this.state.dislike + 1 });
  };
  render() {
    return (
      <View>
        <AppHeader />
        <View>
      
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('WeatherScreen')}>
              <Image
                source={require('../forecast.png')}
                style={{ width: 220, height: 180 }}
              />
              <Text>VIEW WEATHER FORECAST</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('NewsScreen')}>
              <Image
                source={require('../77a008f346448858f40435943feb27eb.jfif')}
                style={{ width: 220, height: 180 }}
              />

              <Text>CLICK TO VIEW</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', margin: 5 }}>Rate us</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
              }}>
              <Text>{this.state.like}</Text>
              <Text>{this.state.dislike}</Text>
            </View>
            <TouchableOpacity onPress={this.likeCount}>
              <Image
                style={{ width: 50, height: 50, marginLeft: 5 }}
                source={require('../assets/thumbs-up-hand-symbol.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.dislikeCount}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: -35,
                  marginLeft: 100,
                }}
                source={require('../assets/thumbs-down-silhouette.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
           <Text style={{fontSize:15,color: 'darkgoldenrod'}}>𝑀𝒶𝒹𝑒 𝒷𝓎 
           𝒪𝓂𝓈𝒽𝓇𝑒𝑒 𝒱𝒶𝓈𝒶𝓃𝓉 𝒯𝒾𝒹𝓀𝑒.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 100,
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 220,
    height: 200,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
