import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Loader from '../common/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Users from '../constants/UserDetails';
const Login = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true);

  //Toggle password visibility
  managePasswordVisibility = () => {
    setPasswordHidden(!passwordHidden);
  };
  const checkLogin = (email, password) => {
    setModalVisible(true);
    const userExists = Users.filter(user => user.email === email);
    if (userExists && userExists[0].password === password) {
      navigation.navigate('Root');
      setEmail('');
      setPassword('');
      setPasswordHidden(true);
    } else {
      alert('Invalid Credentials');
    }
  };
  const goToNextScreen = async data => {
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('USERID', data.userId);
    navigation.navigate('Products');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        placeholder="Enter your email address"
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={txt => setEmail(txt)}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          alignSelf: 'center',
          paddingLeft: 20,
          marginTop: 20,
        }}
      />
      <TextInput
        placeholder="Enter Password"
        value={password}
        secureTextEntry={passwordHidden}
        autoCompleteType="password"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={txt => setPassword(txt)}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          alignSelf: 'center',
          paddingLeft: 20,
          marginTop: 20,
        }}
      />
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: '#000',
          borderRadius: 10,
          marginTop: 50,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          if (email !== '' && password !== '') {
            checkLogin(email, password);
          } else {
            alert('Please Enter Data');
          }
        }}>
        <Text style={{color: '#fff', fontSize: 20}}>Login</Text>
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 50,
          textDecorationLine: 'underline',
          fontSize: 18,
          fontWeight: '600',
        }}
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        Create New Account
      </Text>
      {/* <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}
    </View>
  );
};

export default Login;
