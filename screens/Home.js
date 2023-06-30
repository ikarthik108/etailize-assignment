import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {ShoppingCart} from 'react-native-feather';

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
const categories = [
  [
    {
      icon: '',
      name: '',
    },
    {
      icon: '',
      name: 'Airplanes',
    },
    {
      icon: '',
      name: 'Cars',
    },
    {
      icon: '',
      name: 'Homes',
    },
  ],
];

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F8E2F7'}}>
      <ScrollView>
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
                <Text style={styles.statsItemLabel}>{label}</Text>
                <View style={styles.categories}>
                  {categories.map((row, index) => (
                    <View style={styles.categoriesRow} key={index}>
                      {row.map(item => (
                        <TouchableOpacity
                          style={styles.category}
                          key={item.name}
                          onPress={() => {
                            // handle onPress
                          }}>
                          <View style={styles.categoryIcon}>
                            <Text style={{fontSize: 36}}>{item.icon}</Text>
                            {/* <ShoppingCart color="#ff" size={20} /> */}
                          </View>
                        </TouchableOpacity>
                      ))}
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  statsItemLabel: {
    marginLeft: 2,
    marginRight: 'auto',
    fontSize: 15,
    fontWeight: '600',
    color: '#4e4a6d',
    justifyContent: 'center',
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
  categories: {
    marginTop: 12,
    display: 'flex',
    flexWrap: 'wrap',
  },
  categoriesRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: -4,
  },
  category: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  categoryIcon: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 36,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#505050',
    marginTop: 8,
    textAlign: 'center',
  },
  // headerImage: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 9999,
  // },
});
