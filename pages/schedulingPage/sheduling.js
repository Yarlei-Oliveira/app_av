import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Agendamento from './components/agendamento';
import SendComment from './components/sendComment';
import CommentSection from './components/commentSection';
import { Locale } from '../../const/var';

export default function Sheduling({ route }) {
    const [locale, setLocalce] = useState("")
    const [service, setService] = useState("")

    const { listItems } = route.params;

    return (
        <View style={styles.shedulingContainer}>
            <View style={styles.shedullingPicker}>
                <Picker
                    selectedValue={locale}
                    onValueChange={(item, index) => {
                        setLocalce(item)
                    }}
                    style={styles.pickerContainer}>
                    {Locale.map((item) => <Picker.Item key={item.idLocal} value={item.local} label={item.local} />)}
                </Picker>
                <Picker
                    selectedValue={service}
                    onValueChange={(item, index) => {
                        setService(item)
                    }}
                    style={styles.pickerContainer}>
                    {listItems.map((item) => <Picker.Item key={item.idService} value={item.service} label={item.service} />)}
                </Picker>
            </View>
            <View>
                {locale !== "" && service !== "" && locale !== "Escolha um local" && service !== "Escolha um serviço"
                    && <Agendamento local={locale} service={service} />}
            </View>
            <View style={styles.commentSectionContainer}>
                {locale !== "" && locale !== "Escolha um local" && <SendComment local={locale} />}
                {locale !== "" && locale !== "Escolha um local" && <CommentSection local={locale} />}
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    shedulingContainer: {
        width: "100%",
        height: "100%",
        justifyContent: 'space-between',
        padding: 10,
    },
    shedullingPicker: {
    },
    commentSectionContainer: {
        justifyContent: 'flex-start',
        height: "50%",
    },

})