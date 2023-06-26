import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions} from '@react-navigation/native';

const AddProduct = ({navigation}) => {
  const [ean, setEan] = useState('');
  const [gtin, setGtin] = useState('');
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [shortName, setShortName] = useState('');
  const [display, setDisplay] = useState(false);

  const handleSubmit = async event => {
    const obj = await AsyncStorage.getItem('products');
    const existingProducts = (obj && JSON.parse(obj)) || null;
    const productArray =
      existingProducts && existingProducts.length > 0 ? existingProducts : [];
    const currentProduct = {
      ean,
      gtin,
      sku,
      name,
      shortName,
    };
    productArray.push(currentProduct);
    await AsyncStorage.setItem('products', JSON.stringify(productArray));
    navigation.dispatch(StackActions.replace('Root'));
  };
  return (
    <View>
      <TextInput
        value={ean}
        keyboardType="number-pad"
        onChangeText={text => {
          setEan(text);
        }}
        placeholder="Please Enter 3 digit EAN Number"
        style={styles.textInput}
        maxLength={3}
      />
      <TextInput
        value={gtin}
        keyboardType="numeric"
        onChangeText={text => {
          setGtin(text);
        }}
        placeholder="Enter 2 Digit GTIN"
        style={styles.textInput}
        maxLength={3}
      />
      <TextInput
        value={sku}
        keyboardType="numeric"
        onChangeText={text => {
          setSku(text);
        }}
        placeholder="Enter 3 digit sku"
        maxLength={3}
        style={styles.textInput}
      />
      <TextInput
        value={name}
        maxLength={4}
        onChangeText={text => {
          setName(text);
        }}
        placeholder="Name"
        style={styles.textInput}
      />
      <TextInput
        value={shortName}
        maxLength={4}
        onChangeText={text => {
          setShortName(text);
        }}
        placeholder="Short Name"
        style={styles.textInput}
      />
      <Button title="Save Product" onPress={handleSubmit} />
      <View>{display ? <View></View> : null}</View>
    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    fontSize: 18,
    color: 'blue',
    borderRadius: 10,
    borderWidth: 2,
  },
});
