import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export default function ProductsButtonGroup({navigation}) {
  return (
    <View style={{flex: 1}}>
      {/* <View style={styles.placeholder}> */}
      {/* <View style={styles.placeholderInset}> */}
      {/* Replace with your content */}
      {/* </View> */}
      {/* </View> */}

      <View style={styles.overlay}>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => {
              // handle onPres
            }}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Bulk Edit</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('AddProduct')}
            style={{flex: 1, paddingHorizontal: 8}}>
            <View style={styles.btnSecondary}>
              <Text style={styles.btnSecondaryText}>New Product</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginTop: 10,
  },
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 60,
    padding: 24,
    backgroundColor: '#F3F4F6',
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: '#CFD1D4',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  footer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 36,
    borderWidth: 1,
    backgroundColor: '#48d19d',
    borderColor: '#48d19d',
    height: 52,
  },
  btnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#48d19d',
    borderColor: '#48d19d',
    height: 52,
  },
  btnSecondaryText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '700',
    color: '#fff',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '700',
    color: '#fff',
  },
});
