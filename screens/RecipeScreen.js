import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function RecipeScreen({navigation}) {

const route = useRoute(); //Récup l'obj route
const { recipe } = route.params; // Extrait recette passée en param

const [servings, setServings] = useState(recipe.servingNb);

const handleBack = () => {
  navigation.goBack();
}


  return (
    <View style={[styles.container, {backgroundColor: recipe.color}]}>
      <View style={[styles.card, {backgroundColor: recipe.color}]}>
        <TouchableOpacity onPress={handleBack} style={styles.fleche}>
          <FontAwesome name="arrow-left" size={25} color="#655074" />
        </TouchableOpacity>
        <Image style={styles.image} source={recipe.image}/>
        <View style={styles.fav}>
        <FontAwesome name="bookmark-o" size={25} color={'white'}/>
        </View>
      </View>
      <View style={styles.recipe}>
        <View style={styles.infos}>
        <View style={styles.petitesInfos}>
        <FontAwesome name="tachometer" size={30} color={recipe.color} />
          <Text>{recipe.level}</Text>
        </View>
        <View style={styles.petitesInfos}>
        <FontAwesome name="clock-o" size={30} color={recipe.color} />
          <Text>{recipe.time}</Text>
        </View>
        <View style={styles.petitesInfos}>
        <FontAwesome name="star" size={30} color={recipe.color} />
          <Text>{recipe.rating}</Text>
        </View>
        </View>
        <View style={styles.title}>
          <Text style={{fontSize: 30, fontWeight:'bold'}}>{recipe.name}</Text>
          <Text>{recipe.longDesc}</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontWeight: 'bold'}}>Ingredients</Text>
          <Text>How many servings?</Text>
        </View>

        <View style={styles.servingControl}>
          <TouchableOpacity onPress={() => setServings(serving => Math.max(1, serving - 1))}> {/* empeche de descendre en dessous de 0, méthode la + simple ? jsp */}
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
          <Text style={styles.servingNb}>{servings}</Text>
          <TouchableOpacity onPress={() => setServings(serving => serving + 1)}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList style={{marginTop: 20}}
          data={recipe.ingredients}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          renderItem={({ item }) => {
            const totalAmount = item.amount * servings;
            return (
              <Text style={styles.ingredients}>{item.name} {totalAmount} {item.unit}</Text>
            );
          }}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: 'white',
  },
  card: {
    height: 430,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: -20,
  },
  image: {
    width: 230,
    height: 230,
    borderRadius: 8,
   
  },
  recipe: {
    flex: 1,
    width: '100%',
    borderTopRightRadius: 190,
    backgroundColor: 'white',
    marginTop: -70,
    overflow: 'hidden',
    padding: 10
  },
  fleche: {
    position: 'absolute',
    top: 50,
    left: 50,
  },
  infos:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  petitesInfos: {
   margin: 20,
  },
  fav:{
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#655074',
    height: 55,
    width: 55,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ingredients:{
    fontSize: 16,
    marginBottom: 8,
  },
  servingControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    gap: 10,
  },
});
