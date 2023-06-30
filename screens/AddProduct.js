import {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
    <SafeAreaView style={{flex: 1, backgroundColor: '#F4EFF3'}}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.form}>
            <View style={styles.input}>
              <TextInput
                value={ean}
                keyboardType="number-pad"
                onChangeText={text => {
                  setEan(text);
                }}
                placeholder="Please Enter 3 digit EAN Number"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                maxLength={3}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                value={gtin}
                keyboardType="numeric"
                onChangeText={text => {
                  setGtin(text);
                }}
                placeholder="Enter 2 Digit GTIN"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                maxLength={3}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                value={sku}
                keyboardType="numeric"
                onChangeText={text => {
                  setSku(text);
                }}
                placeholder="Enter 3 digit sku"
                placeholderTextColor="#6b7280"
                maxLength={3}
                style={styles.inputControl}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                value={name}
                maxLength={4}
                onChangeText={text => {
                  setName(text);
                }}
                placeholder="Name"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                value={shortName}
                maxLength={4}
                onChangeText={text => {
                  setShortName(text);
                }}
                placeholder="Short Name"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
              />
            </View>
            <View style={styles.formAction}>
              <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Add Product</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>{display ? <View></View> : null}</View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#181818',
    marginBottom: 36,
  },
  form: {
    paddingHorizontal: 24,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
    color: '#9fa5af',
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1c1c1e',
    marginBottom: 6,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#24262e',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    marginBottom: 16,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: 1,
    backgroundColor: '#FD6B68',
    borderColor: '#FD6B68',
  },
});
