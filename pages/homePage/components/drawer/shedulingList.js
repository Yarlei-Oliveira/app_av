import { View, Text } from 'react-native'
import { ref, onValue } from "firebase/database";
import { database } from '../../../../firebase';
import React, { useState } from 'react'
import { user } from '../../../loginPage'

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
    <View>
      {shedulingList.map((element) => <Text key={element.dataMarcada}>{element.service}</Text>)}
    </View>
  )
}

export default ShedulingList