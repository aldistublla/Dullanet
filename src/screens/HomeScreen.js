import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { users } from '../data/users';
import CustomHeader from '../components/CustomHeader';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function HomeScreen({ navigation, loggedInUser }) {
  const otherUsers = users.filter(user => user.id !== loggedInUser.id);
  const [cards, setCards] = useState(otherUsers);

  return (
    <View style={styles.container}>
      {/* Header me Drawer */}
      <CustomHeader title="Dullanet" navigation={navigation} />

      <View style={styles.swiperContainer}>
        {cards.length > 0 ? (
          <Swiper
            cards={cards}
            renderCard={(card) => (
              <View style={styles.card}>
                <Image source={card.avatar} style={styles.avatar} />
                <Text style={styles.name}>{card.name}, {card.age}</Text>
                <Text style={styles.bio}>{card.bio}</Text>
              </View>
            )}
            onSwiped={(cardIndex) => console.log('Swiped:', cards[cardIndex].name)}
            onSwipedRight={(cardIndex) => console.log('Liked:', cards[cardIndex].name)}
            stackSize={3}              
            stackSeparation={10}        
            stackScale={0.95}           
            cardVerticalMargin={0}        
            backgroundColor="transparent"
            animateCardOpacity
            containerStyle={{ flex: 1 }}
          />
        ) : (
          <Text style={{ fontSize: 18, color: '#ff1493' }}>No other users available.</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff0f5', 
    alignItems: 'center' 
  },
  swiperContainer: {
    flex: 1,
    justifyContent: 'center',  // vertikalisht në mes
    alignItems: 'center',      // horizontalisht në mes
  },
  card: {
    width: screenWidth * 0.45,   // më të vogla
    height: screenWidth * 0.55,  
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
    paddingTop: 10,
  },
  avatar: {
    width: '90%',
    height: '65%',
    borderRadius: 15,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  name: {
    fontSize: screenWidth * 0.04,
    fontWeight: 'bold',
    color: '#ff1493',
    marginBottom: 4,
    textAlign: 'center',
  },
  bio: {
    fontSize: screenWidth * 0.03,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 6,
  },
});
