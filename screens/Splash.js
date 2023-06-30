import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  Modal,
  Image,
} from 'react-native';

const Splash = ({navigation}) => {
  const [screenReady, setScreenReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
      setScreenReady(true);
    }, 2000);
  }, []);
  return (
    <View style={styles.modalBackground}>
      <View style={styles.activityIndicatorWrapper}>
        {/* <ActivityIndicator color="black" /> */}

        {/* If you want to image set source here */}
        <Image
          source={require('../assets/logo-main-text.gif')}
          style={{height: 120, width: 120}}
          resizeMode="contain"
          resizeMethod="resize"
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    top: 50,
    left: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#F8E2F7',
    zIndex: 1000,
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 140,
    width: 140,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
