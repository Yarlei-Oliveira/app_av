import { View, StyleSheet, ScrollView } from 'react-native'
import { ref, onValue } from "firebase/database";
import { database } from '../../../../../firebase';
import React, { useState } from 'react'
import { user } from '../../../../loginPage'
import ShedulingListCard from './component/shedulingListCard';

const ShedulingList = () => {
  const [shedulingList, setShedulingList] = useState([])
  var shedulingListAux = [];

  const dbRef = ref(database, "agendamento/");
  onValue(dbRef, (data) => {
    if (!data.exists()) {
    }
    data.forEach((element) => {

      if (element.val().userId === user.uid) {
        shedulingListAux.push({
          local: element.val().Local,
          dataMarcada: element.val().dateMarcado,
          horaDaRetirada: element.val().dateRetirada,
          service: element.val().service,
        })
      }
    })
    setShedulingList(shedulingListAux.reverse())
  }, { onlyOnce: true });


  return (
    <View style={styles.shedulingListContainer}>
      <ScrollView style={styles.shedulingListContainer}>
        {shedulingList.length > 0 && shedulingList.map((element) => {
          const dataMarcada = element.dataMarcada.replace("?", " as ").replace("|", "/").replace("|", "/")
          return <ShedulingListCard
            local={element.local}
            dataMarcada={dataMarcada}
            horaDaRetirada={element.horaDaRetirada}
            service={element.service}
          />
        }
        )}

      </ScrollView>
    </View>
  )
}

export default ShedulingList

const styles = StyleSheet.create({
  shedulingListContainer: {
    width: "100%",
    height: "100%",
    padding: 10,
  }
})