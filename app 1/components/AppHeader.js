import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


class AppHeader extends React.Component{
  render(){
    return(
      <View >
        <Text style={[styles.text,{backgroundColor:"black"}]}>DAILY NEWS APP</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  text:{
    color: 'orange',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;
