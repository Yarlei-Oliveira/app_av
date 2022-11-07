<<<<<<< HEAD
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
=======
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Agendamento from './components/agendamento';
import SendComment from './components/sendComment';
import CommentSection from './components/commentSection';

export default function Sheduling({ route }) {
    const [service, setService] = useState("")

    const { listItems } = route.params;

    return (
        <View style={styles.shedulingContainer}>
            <View>
                <Picker
                    selectedValue={service}
                    onValueChange={(item, index) => {
                        setService(item[index].service)
                    }}
                    style={styles.pickerContainer}>
                    {listItems.map((item) => <Picker.Item key={item.idService} value={item.service} label={item.service} />)}
                </Picker>
            </View>
            <View>
                <Agendamento />
                <SendComment />
                <CommentSection/>
            </View>


        </View>
>>>>>>> 4e4744036c494a5a8be4a7bb104e475b94348d48
    )

}

const styles = StyleSheet.create({
    shedulingContainer: {
        padding: 10,
    },


})