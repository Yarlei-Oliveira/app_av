import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';


export default function Sheduling({ route }) {
    const [service, setService] = useState("Selecione um Serviço")
    const { listItems } = route.params;
    return (
        <View>
            <Picker
                selectedValue={service}
                onValueChange={(item, index) => {
                    setService(item)
                }}
                style={styles.pickerContainer}>
                {listItems.map((item) => <Picker.Item key={item.id} value={item.service} label={item.service} />)}
            </Picker>
            <View>
                
            </View>
        </View>

    )
}

const styles = StyleSheet.create({})