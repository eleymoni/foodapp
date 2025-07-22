import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import {useSelector} from 'react-redux';
import { recipes } from '../data/recipes';

export default function MyRecipesScreen({navigation}) {

  const favorites = useSelector(state => state.favorites.value);

  const favoriteRecipes = recipes.filter(recipe => favorites.some(fav => fav.name === recipe.name));

  const handlePress = (recipe) => {
    navigation.navigate('Recipe', {recipe}); //Donc navigation avec paramètres qu'on peut récup dans RecipeScreen
  };
  
  return (
    <View style={styles.container}>
          <Text style={styles.title}>The best ones...</Text>

          {favoriteRecipes.length === 0 ? (
            <Text style={{ textAlign: 'center', marginTop: 20,}}>No favorite recipes yet !</Text>
          ) : (
            <FlatList
            key={'two-columns'}
            data={favoriteRecipes}
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
                )}
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
    
