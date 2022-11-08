import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ref, onValue } from "firebase/database";
import { database } from '../../../firebase';
import CardComment from './cardComment';

const CommentSection = () => {
    var commentsAux = []
    const [comments, setComments] = useState([])

    const dbRef = ref(database, 'feedBack/');
    onValue(dbRef, (data) => {
        if (!data.exists()) {
        }
        data.forEach((element) => {
            commentsAux.push({
                id: element.key,
                date: element.val().date,
                comment: element.val().comment,
                email: element.val().email,
                feedback: element.val().feedback
            })
        })
        setComments(commentsAux.reverse())
    }, { onlyOnce: true });
    return (
        <View style={styles.commentSection}>
            <ScrollView>
                {comments.length > 0 && comments.map((item) => <CardComment
                    key={item["id"]}
                    email={item["email"]}
                    comment={item["comment"]}
                    date={item["date"]}
                    isLike={item["feedback"].like}
                    isDisLike={item["feedback"].disLike}
                />)}
            </ScrollView>
        </View>
    )
}

export default CommentSection

const styles = StyleSheet.create({
    commentSection: {
        width: "100%",
        height: "50%"
    },
}) 