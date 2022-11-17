import { StyleSheet, Text, View } from 'react-native'
import { ref, onValue } from "firebase/database";

import React, { useState } from 'react'
import { database } from '../../../../../firebase';
import CardAuthorization from './components/cardAuthorization';

const AuthorizationPage = () => {
    const [users, setUsers] = useState([])

    var usersAux = []

    const dbRef = ref(database, "users/");
    onValue(dbRef, (data) => {
        if (!data.exists()) {
            return
        }
        data.forEach((element) => {
            usersAux.push({
                email: element.val().email,
                id: element.val().id,
                superAdmin: element.val().superAdmin,
                admin: element.val().admin
            })
        })
        setUsers(usersAux)
    },{onlyOnce: true});
        
    return (
        <View style={styles.AuthorizationContainer}>
            {users.map((element) => 
            <CardAuthorization
                email = {element.email}
                uid = {element.id}
                isSuperAdmin = {element.superAdmin}
                isAdmin = {element.admin}
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