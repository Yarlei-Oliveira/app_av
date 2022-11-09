import { StyleSheet, Text, View } from 'react-native'
import { ref, onValue } from "firebase/database";

import React, { useState } from 'react'
import { database } from '../../../../../firebase';
import CardAuthorization from './components/cardAuthorization';

const AuthorizationPage = () => {
    var usersList = []
    const [users, setUsers] = useState([])

    const dbRef = ref(database, "users/");
    onValue(dbRef, (data) => {
        if (!data.exists()) {
        }
        data.forEach((element) => {
            usersList.push(element.val())
        })
        setUsers(usersList.reverse())
    }, { onlyOnce: true });

    return (
        <View style={styles.AuthorizationContainer}>
            {users.map((element) => 
            <CardAuthorization
                email = {element.email}
            />)}
        </View>
    )
}

export default AuthorizationPage

const styles = StyleSheet.create({
    AuthorizationContainer: {
        width: "100%",
        height: "100%",
        padding: 10
    }
})