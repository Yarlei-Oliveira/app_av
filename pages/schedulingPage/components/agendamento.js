import { StyleSheet, Text, View, Platform } from 'react-native'
import DatePicker from '@react-native-community/datetimepicker';
import { IconButton } from 'react-native-paper';
import React, { useState } from 'react'
import { database } from '../../../firebase';
import { ref, set } from "firebase/database";
import { user } from "../../loginPage"

export default function Agendamento(props) {
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)

    const [data, setData] = useState("")
    const [horario, setHorario] = useState("")
    const [horarioRetirada, setHorarioRetirada] = useState("")


    const onChange = (Event, selectedDate) => {
        const currentDate = selectedDate || date
        setShow(Platform.OS === 'ios');
        setDate(currentDate)


        let fDate = currentDate.getDate() + '|' + (currentDate.getMonth() + 1) + "|" + currentDate.getFullYear();
        let fTime = currentDate.getHours() + ":" + currentDate.getMinutes()


        setHorarioRetirada(currentDate.getHours() + 1 + ":" + currentDate.getMinutes())
        setData(fDate)
        setHorario(fTime)
    }

    function resetState() {
        setData("")
        setHorario("")
        setHorarioRetirada("")
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    function writeUserData() {
        const dataAgendada = data + "?" + horario
        set(ref(database, "agendamento/" + "/" + dataAgendada), {
            userId: user.uid,
            dateMarcado: dataAgendada,
            dateRetirada: horarioRetirada,
            Local: props.localId,
            type: props.type,
            service: props.service
        });
        resetState();
    }
    return (
        <View>
            <View style={styles.dateContainer}>
                <View style={styles.shedulingRow}>
                    <Text style={styles.dateSetText}>Data marcada para: {data}</Text>
                    <IconButton
                        icon={"calendar-month"}
                        onPress={() => showMode("date")}
                    />
                </View>
                <View style={styles.shedulingRow}>
                    <Text style={styles.dateSetText}>Horario marcada para: {horario}</Text>
                    <IconButton
                        icon={"chevron-down-circle"}
                        onPress={() => showMode("time")}
                    />
                </View>
                <View style={[styles.sendButton, styles.shedulingRow]}>
                    <Text style={styles.dateSetText}>Horario de retirada:  {horarioRetirada}</Text>
                    <IconButton
                        icon={"send"}
                        onPress={() => writeUserData()}
                    />
                </View>
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
    },
    sendButton: {
        alignItems: "flex-end",

    },
    shedulingRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    dateSetText: {
        color: "black"
    },
})