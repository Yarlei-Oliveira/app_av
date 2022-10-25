import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../../firebase'
import { useNavigation } from '@react-navigation/native'
import Card from './components/card'


const HomePage = () => {
  const navigation = useNavigation();
  const handleSingOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch((err) => {
        alert(err.message)
      })
  }
  return (
    <View style={styles.homePageView}>
      <View style={styles.cards}>
        <Card
          imageUrl="https://revistacarro.com.br/wp-content/uploads/2021/06/Fiat-Pulse_1.jpg"
        />
      </View>


      {/* <TouchableOpacity style={styles.buttonSingOut} onPress={handleSingOut}>
        <Text style={styles.textSingOut}>Deslogar</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  homePageView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cards: {
    padding: 15,
    width: "100%",
    height: "30%",
  }
})