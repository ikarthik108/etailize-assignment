import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

const HeaderView = ({navigation, title}) => {
  return (
    <Header
      style={{backgroundColor: '#4796BD', flexDirection: 'row'}}
      placement="flex"
      androidStatusBarColor="#247095">
      <Text style={{fontSize: 21, color: '#fff'}}>{title}</Text>
    </Header>
  );
};

export default HeaderView;
