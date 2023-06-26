import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductItem from '../components/ProductListItem';
import AddProduct from './AddProduct';
import ProductsButtonGroup from '../components/ProductsButtonGroup';
import {Search} from 'react-native-feather';
import {ScrollView} from 'react-native-gesture-handler';

export default function ProductsPage({navigation}) {
  const [productsArray, setProductsArray] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const product = await AsyncStorage.getItem('products');
      const parsedProduct = JSON.parse(product);
      if (parsedProduct !== null) {
        setProductsArray(parsedProduct);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = value => {
    AsyncStorage.getItem('products').then(products => {
      const updatedProducts = JSON.parse(products);
      for (let i = 0; i < updatedProducts.length; i++) {
        if (updatedProducts[i].sku == value) {
          updatedProducts.splice(i, 1);
        }
      }
      setProductsArray(updatedProducts);
      AsyncStorage.setItem('products', JSON.stringify(updatedProducts));
    });
  };

  const renderItem = ({item}) => {
    return (
      <ProductItem
        item={item}
        handleChange={x => {
          handleRemove(x);
        }}
      />
    );
  };

  const onSearch = text => {
    if (text == '') {
      getProducts();
    } else {
      let filteredResults = productsArray.filter(product => {
        return product.sku.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });

      setProductsArray(filteredResults);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FBFCFF'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Product Information Management</Text>
        <View style={styles.search}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#9695b0"
            style={styles.searchInput}
            value={search}
            onChangeText={txt => {
              onSearch(txt);
              setSearch(txt);
            }}
          />
          <View style={styles.searchFloating}>
            <TouchableOpacity>
              <View style={styles.searchButton}>
                <Search size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {productsArray && productsArray.length > 0 ? (
          <FlatList data={productsArray} renderItem={renderItem} />
        ) : null}
      </View>
      <ProductsButtonGroup navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    maxHeight: '80%',
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  stats: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#90a0ca',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 1,
    flexDirection: 'row',
  },
  statsItem: {
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  statsItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsItemText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#323142',
    opacity: 0.7,
    marginBottom: 4,
  },
  statsItemValue: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#323142',
    marginLeft: 4,
  },
  searchInput: {
    height: 36,
    backgroundColor: '#f3f3f6',
    paddingHorizontal: 16,
    color: '#1a2525',
    fontSize: 18,
    borderRadius: 9999,
  },
  searchFloating: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  searchButton: {
    alignSelf: 'center',
    width: 30,
    height: 30,
    borderRadius: 9999,
    backgroundColor: '#5bd2bc',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
