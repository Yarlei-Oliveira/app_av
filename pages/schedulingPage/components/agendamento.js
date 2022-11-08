import { StyleSheet, Text, View, Platform } from 'react-native'
import DatePicker from '@react-native-community/datetimepicker';
import { IconButton } from 'react-native-paper';
import React, { useState } from 'react'
import { database } from '../../../firebase';
import { ref, set } from "firebase/database";

export default function Agendamento(props) {
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [text, setText] = useState("Empty")
    const [horarioRetirada, sethorarioRetirada] = useState("Empty")



    const onChange = (Event, selectedDate) => {

        const currentDate = selectedDate || date
        setShow(Platform.OS === 'ios');
        setDate(currentDate)


        let fDate = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear();
        let fTime = 'Horario: ' + currentDate.getHours() + ":" + currentDate.getMinutes()


        sethorarioRetirada(currentDate.getHours() + 1 + ":" + currentDate.getMinutes())
        setText(fDate + " | " + fTime)
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    function writeUserData() {
        set(ref(database, props.local + "/"), {
            dateMarcado: date.toString(),
            dateRetirada: horarioRetirada,
            service: props.service
        });
    }
    return (
        <View style={styles.dateSetContainer}>
            <View>
                <Text style={styles.dateSetText}>Data marcada para {text}</Text>
                <Text style={styles.dateSetText}>Horario de retirada:  {horarioRetirada}</Text>
            </View>
            <View style={styles.dateContainer}>
                <IconButton
                    icon={"calendar-month"}
                    onPress={() => showMode("date")}
                />
                <IconButton
                    icon={"chevron-down-circle"}
                    onPress={() => showMode("time")}
                />
                <IconButton
                    icon={"send"}
                    onPress={() => writeUserData()}
                />
            </View>
            <View>
                {show && (
                    <DatePicker
                        style={styles.calendar}
                        format="DD/MM/YYYY"
                        placeholder={"Selecione uma Data"}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        date={date}
                        value={date}
                        mode={mode}
                        onChange={onChange}
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                            },
                            dateInput: {
                                marginLeft: 36,
                            },
                        }}
                    />
                )}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    dateContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dateSetContainer: {
        padding: 10,
    },
    dateSetText: {
        color: "black"
    },
})