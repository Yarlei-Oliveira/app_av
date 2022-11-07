import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../../firebase'
import Card from './components/card'
<<<<<<< HEAD
import { listItems } from '../../const/services'
=======
import { servicesCars } from '../../const/var'
>>>>>>> 4e4744036c494a5a8be4a7bb104e475b94348d48


const HomePage = ({ navigation }) => {


<<<<<<< HEAD
  const goSheduling = (listService) => {
    navigation.navigate("Sheduling", {
      listItems: listService
=======
  const goSheduling = (listServices) => {
    navigation.navigate("Sheduling", {
      listItems: listServices
>>>>>>> 4e4744036c494a5a8be4a7bb104e475b94348d48
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
<<<<<<< HEAD
          onPress={() => goSheduling(listItems)}>
=======
          onPress={() => goSheduling(servicesCars)}>
>>>>>>> 4e4744036c494a5a8be4a7bb104e475b94348d48
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