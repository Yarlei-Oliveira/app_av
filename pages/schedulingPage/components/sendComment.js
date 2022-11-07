import { StyleSheet, TextInput, View, KeyboardAvoidingView } from 'react-native'
import { IconButton } from 'react-native-paper';
import React, { useState } from 'react'
import { ref, set } from "firebase/database";
import { database } from '../../../firebase';
import { userEmail } from '../../loginPage';



const SendComment = () => {
    const [comment, setComent] = useState("")
    const [feedBack, setFeedBack] = useState({
        like: false,
        disLike: false
    })

    const date = new Date().toLocaleString()

    function resetSendComment() {
        setComent("")
        setFeedBack({
            like: false,
            disLike: false
        })
    }

    function writeUserData(comment) {

        set(ref(database, 'feedBack/' + date), {
            email: userEmail,
            comment: comment,
            feedback: feedBack,
            date: date
        });
    }
    return (
        <View>
            <KeyboardAvoidingView style={styles.commentSection}>
                <TextInput
                    style={styles.comment}
                    value={comment}
                    multiline={true}
                    onChangeText={text => setComent(text)}
                    placeholder="Deixe o seu Comentari"
                />
            </KeyboardAvoidingView>
            <View style={styles.feedbackSection}>
                <View style={styles.likeAndDislike}>
                    <IconButton
                        icon={
                            feedBack.like && feedBack.disLike === false
                                ? "thumb-up"
                                : "thumb-up-outline"
                        }
                        onPress={() => setFeedBack({
                            like: !feedBack.like,
                            disLike: false
                        })}
                    />
                    <IconButton
                        icon={
                            feedBack.disLike === true && feedBack.like === false
                                ? "thumb-down"
                                : "thumb-down-outline"
                        }
                        onPress={() => setFeedBack({
                            like: false,
                            disLike: !feedBack.disLike
                        })}
                    />
                    <IconButton
                        style={styles.sendButton}
                        icon={"send"}
                        onPress={() => {
                            resetSendComment()
                            writeUserData(comment)
                        }}
                    />
                </View>
            </View>
        </View>
    )
}


export default SendComment

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
    commentSection: {
        width: "100%",
        flexDirection: 'row',
        borderColor: "black",
        padding: 10,
        borderWidth: 2
    },
    feedbackSection: {
        alignItems: 'flex-end'
    },
    likeAndDislike: {
        flexDirection: 'row'
    },

}) 