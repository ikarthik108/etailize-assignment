import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {Edit, Trash2} from 'react-native-feather';

export default function ProductItem({item, handleChange}) {
  const handleRemoveItem = sku => {
    handleChange(sku);
  };

  const {ean, gtin, name, shortName, sku} = item;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FBFCFF'}}>
      <View style={styles.container}>
        <View style={styles.stats}>
          {[
            {label: 'EAN', value: ean},
            {label: 'GTIN', value: gtin},
            {label: 'SKU', value: sku},
          ].map(({label, value}, index) => (
            <View
              key={index}
              style={[styles.statsItem, index === 0 && {borderLeftWidth: 0}]}>
              <Text style={styles.statsItemText}>{label}</Text>
              <Text style={styles.statsItemValue}>{value}</Text>
            </View>
          ))}
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.productAction}>
              {/* <Text style={styles.productActionText}>Edit Product</Text> */}
              <Edit color="#fff" size={16} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleRemoveItem(sku);
            }}>
            <View style={styles.productAction}>
              {/* <Text style={styles.productActionText}Delete Product</Text> */}
              <Trash2 color="#fff" size={16} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginTop: 10,
  },
  title: {
    fontSize: 32,
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
  productAction: {
    marginTop: 10,
    marginLeft: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 20,
  },
  productActionText: {
    marginRight: 4,
    fontSize: 5,
    fontWeight: '600',
    color: '#fff',
  },
});
