import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../../firebase'
import Card from './components/card'
import { servicesCars } from '../../const/var'


const HomePage = ({ navigation }) => {

  const goSheduling = (listServices) => {
    navigation.navigate("Sheduling", {
      listItems: listServices
    })
  }
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
        <TouchableOpacity
          onPress={() => goSheduling(servicesCars)}>
          <Card
            imageUrl="https://revistacarro.com.br/wp-content/uploads/2021/06/Fiat-Pulse_1.jpg"
            nameCard="Carros"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goSheduling}>
          <Card
            imageUrl="https://cdn.pixabay.com/photo/2016/11/22/23/47/dirt-road-1851258__340.jpg"
            nameCard="Motos"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goSheduling}>
          <Card
            imageUrl="https://images.pexels.com/photos/69118/pexels-photo-69118.jpeg?auto=compress&cs=tinysrgb&w=1600"
            nameCard="Bicicletas"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goSheduling}>
          <Card
            imageUrl="https://images.pexels.com/photos/4996777/pexels-photo-4996777.jpeg?auto=compress&cs=tinysrgb&w=1600"
            nameCard="Diversos"
          />
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  homePageView: {
    flex: 1,
  },
  cards: {
    flex: 0.25,
    padding: 5,
    margin: 10,
    justifyContent: 'space-between'
  }
})  