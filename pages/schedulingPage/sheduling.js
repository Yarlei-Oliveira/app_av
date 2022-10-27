import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import{Picker} from '@react-native-picker/picker'

export default function Sheduling({ route }) {
    const listItems = route.params;
    return (
        <Picker style={styles.pickerContainer}>
            {listItems.forEach((item) =><Picker.Item key={item.index} value={item.value} label={item.value}/>)}
        </Picker>
    )
}

const styles = StyleSheet.create({})