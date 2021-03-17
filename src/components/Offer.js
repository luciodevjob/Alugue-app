import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function Offer(props) {
 return (
   <ImageBackground 
   source={props.source}
   style={styles.container}
   blurRadius={3}
   >
    <Text style={[styles.house, styles.shadow]}>
        {props.tittle}
    </Text>

    <Text style={[styles.description, styles.shadow]}>
        {props.description}
    </Text>
   </ImageBackground>
  );
}

const styles = StyleSheet.create({
container:{
    height: 130,
    width: 230,
    marginRight: 20,
    borderRadius: 10,
    marginBottom: 40,
    opacity: 0.9,
    backgroundColor: '#f000',
    marginLeft: 3,
    padding: 12,
    marginTop:20,
},
house: {
fontFamily: 'Montserrat_700Bold',
color: '#fff',
fontSize: 15,
},
description:{
    fontSize: 12,
    fontFamily: 'Montserrat_700Bold',
    color: '#fff',
},
shadow: {
    textShadowOffset:  {width: 1, height: 2},
    textShadowRadius: 3,
    textShadowColor: '#000'
}
})