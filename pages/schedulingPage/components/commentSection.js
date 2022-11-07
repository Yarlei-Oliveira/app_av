import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ref, onValue } from "firebase/database";
import { database } from '../../../firebase';
import CardComment from './cardComment';

const CommentSection = () => {
    var comments = []

    const dbRef = ref(database, 'feedBack/');
    onValue(dbRef, (data) => {
        if (!data.exists()) {
            console.log("Sem items no dataset")
            return;
        }
        data.forEach((element) => {
            comments.push({
                id: element.key,
                date: element.val().date,
                comment: element.val().comment,
                email: element.val().email,
                feedback: element.val().feedback
            })
        })
    }, { onlyOnce: true });
    comments.reverse();
    return (
        <View style={styles.commentSection}>
            <ScrollView>
                {comments !== null && comments.map((item) => <CardComment
                    key={item["id"]}
                    email={item["email"]}
                    comment={item["comment"]}
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