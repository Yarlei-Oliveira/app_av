import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'

export default function Sheduling({ route }) {
    const listItems = route.params.listItems;

    const [service, setService] = useState("");
    return (
        <Picker
            style={styles.pickerContainer}
            selectedValue={service}
            onValueChange={(itemSelected, index) => {
                setService(itemSelected)
            }}>
            {listItems.map((item) => <Picker.Item key={item.id} value={item.service} label={item.service} />)}
        </Picker>
    )
}

const styles = StyleSheet.create({})