import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { recipes } from '../data/recipes';

export default function SearchScreen({navigation}) {

// const recipeList = recipes.map((data, i) => {
//     return (
//       <View key={i} style={styles.card}>
//           <Image style={styles.image} source={data.image} />
//           <Text style={styles.name}>{data.name}</Text>
//           <Text>{data.desc}</Text>
//       </View>
//     );
//   });  -> autre façon d'affichage apparemment moins perfomrant que flatlist

const handlePress = (recipe) => {
  navigation.navigate('Recipe', {recipe}); //Donc navigation avec paramètres qu'on peut récup dans RecipeScreen
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What do you want to eat today?</Text>
      <Text style={{opacity:0.6,fontSize: 15, color: 'grey'}}>Our daily healthy meal plans</Text>
      <FlatList
              key={'two-columns'}
              data={recipes}
              keyExtractor={(item) => item.name}
              numColumns={2}
              renderItem={({ item }) => (
                <View style={[styles.card, {backgroundColor: item.color}]}>
                  <TouchableOpacity onPress={() => handlePress(item)} style={styles.button} activeOpacity={0.8}> 
                  {/* appelle handlePress() en lui passant cette recette précise(item) de renderItem */}
                    <Image style={styles.image} source={item.image} />
                    <View style={styles.text}>
                      <Text style={{color: '#655074', fontWeight: 'bold', textAlign:'right'}}>{item.name}</Text>
                      <Text style={{color: 'grey', textAlign:'right'}}>{item.desc}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: "#fff",
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#655074',
    marginRight:20,
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '45%',
    height: 240,
    padding: 15,
    paddingLeft: 20,
    marginTop: 15,
    marginBottom: 15,
    marginHorizontal: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 40,
    borderEndEndRadius: 25,
    borderEndStartRadius: 70,
  },
  image: {
    width: 120,
    height: 120,
  },
  text: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
