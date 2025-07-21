import { StyleSheet, Text, View, Image, TouchableOpacity, Icon } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({navigation}) {

  const handleNav = () => {
    navigation.navigate('DrawerNavigator');
    };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/home.jpg')} />
            <Text style={styles.title}>FoodApp</Text>
            <TouchableOpacity onPress={handleNav} style={styles.button} activeOpacity={0.8}>
              <View style={{flexDirection: 'row', alignItems: 'center', marginRight:20 }}>
                <Text style={styles.textButton}>Let's go!</Text>
                <FontAwesome name="arrow-right" size={18} color="#fff" style={{ marginLeft: 10 }} />
              </View>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    backgroundColor: '#655074',
  },
  title: {
    fontSize: 70,
    fontWeight: '600',
    color: 'white',
    marginRight:20,
    marginTop: 20,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '75%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 200,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
  }
});
