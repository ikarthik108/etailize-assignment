import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const items = [
  {
    icon: 'users',
    label: 'Products Import & Export',
    value: 832,
  },
  {
    icon: 'grid',
    label: 'No of orders this month',
    value: 8,
  },
  {
    icon: 'archive',
    label: 'Products in stock',
    value: 222,
  },
  {
    icon: 'columns',
    label: 'Sale',
    value: 48,
  },
  {
    icon: 'list',
    label: 'Pinned Products',
    value: 83,
  },
];

const Drawer = createDrawerNavigator();

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F8E2F7'}}>
      <View style={styles.top}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}></TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Dashboard</Text>

        <View style={styles.stats}>
          {items.map(({icon, label, value}, index) => (
            <View key={index} style={styles.statsItem}>
              <FeatherIcon color="#8C6CAB" name={icon} size={14} />

              <Text style={styles.statsItemLabel}>{label}</Text>

              <Text style={styles.statsItemValue}>{value}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
    textAlign: 'center',
  },
  stats: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  statsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  statsItemLabel: {
    marginLeft: 8,
    marginRight: 'auto',
    fontSize: 15,
    fontWeight: '600',
    color: '#4e4a6d',
  },
  statsItemValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#4e4a6d',
  },
  top: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 9999,
  },
});
