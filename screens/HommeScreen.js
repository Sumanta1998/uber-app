import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import MapboxComponent from '../components/Map';

const HommeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-3`}>
        <Image
          style={{width: 100, height: 100, resizeMode: 'contain'}}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png',
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HommeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'red',
//   },
// });
