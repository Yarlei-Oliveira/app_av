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
            <View>
                <Picker
                    selectedValue={locale}
                    onValueChange={(item, index) => {
                        setLocalce(item)
                    }}
                    style={styles.pickerContainer}>
                    {Locale.map((item) => <Picker.Item key={item.idLocal} value={item.local} label={item.local} />)}
                </Picker>
            </View>
            <View>
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
                <Agendamento local={locale} service={service} />
            </View>
            <View style={styles.commentSectionContainer}>
                <SendComment />
                <CommentSection />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    shedulingContainer: {
        width: "100%",
        height: "100%",
        padding: 10,
    },
    commentSectionContainer: {
        justifyContent: 'flex-end'
    },

})