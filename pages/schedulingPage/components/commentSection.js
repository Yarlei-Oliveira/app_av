import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ref, child, get } from "firebase/database";
import { database } from '../../../firebase';

const CommentSection = () => {
    const comments = []
    const commentsRef = ref(database);
    get(child(commentsRef, 'feedBack/')).then(data => {
        if (data.exists()) {
            console.log("Sem items no dataset")
            return;
        }
        const listFromDataSet = {
            comment: data.val().comment,
            date: data.val().date,
            email: data.val().email,
            feedback: data.val().feedback
        }
     
            comments.push(listFromDataSet)
       
    })
   


    return (
        <View>
            {/* {comments.map((item) => <Text>{item["comment"]}</Text>)} */}
        </View>
    )
}

export default CommentSection