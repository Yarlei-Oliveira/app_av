import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth, database } from '../../firebase'
import Card from './components/card'
import { servicesCars } from '../../const/var'
import { user } from '../loginPage'
import { onValue, ref, set } from 'firebase/database'


const HomePage = ({ navigation }) => {


  const goSheduling = (listServices, type) => {
    navigation.navigate("Sheduling", {
      type: type,
      listItems: listServices
    })
  }
  function writeUserData() {
    set(ref(database, "users/" + user.uid), {
      email: user.email,
      id: user.uid,
      admin: false,
      superAdmin: false
    });
}

const dbRef = ref(database, "users/");
onValue(dbRef, (data) => {
  if (!data.exists()) {
    return
  }
  let listIds = []
  data.forEach((element) => {
    listIds.push(element.val().id)
  })
  if(listIds.includes(user.uid)){
    return
  }else{
    writeUserData()
  }
}, {onlyOnce: true});



  return (
    <View style={styles.homePageView}>
      <View style={styles.cards}>
        <TouchableOpacity
          onPress={() => goSheduling(servicesCars, "Carros")}>
          <Card
            imageUrl="https://revistacarro.com.br/wp-content/uploads/2021/06/Fiat-Pulse_1.jpg"
            nameCard="Carros"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goSheduling(servicesCars, "Motos")}>
          <Card
            imageUrl="https://cdn.pixabay.com/photo/2016/11/22/23/47/dirt-road-1851258__340.jpg"
            nameCard="Motos"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goSheduling(servicesCars, "Bicicletas")}>
          <Card
            imageUrl="https://images.pexels.com/photos/69118/pexels-photo-69118.jpeg?auto=compress&cs=tinysrgb&w=1600"
            nameCard="Bicicletas"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goSheduling(servicesCars, "Diversos")}>
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