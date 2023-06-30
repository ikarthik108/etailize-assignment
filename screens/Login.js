import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import {useState} from 'react';
import Users from '../constants/UserDetails';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true);

  managePasswordVisibility = () => {
    setPasswordHidden(!passwordHidden);
  };
  const checkLogin = (email, password) => {
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
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e8ecf4'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            alt=""
            resizeMode="contain"
            style={styles.headerImg}
            source={{
              uri: 'https://etailize-webapp-a-ase-win.azurewebsites.net/media/logo-main-text.png',
            }}
          />

          <Text style={styles.title}>
            Sign in to <Text style={{color: '#075eec'}}>e.tailize</Text>
          </Text>

          <Text style={styles.subtitle}>
            Get access to your inventory and more...
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
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
          </View>
          <View style={styles.input}>
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
          </View>
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 36,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});
