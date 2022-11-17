import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import { database } from '../../../../../../firebase'
import { ref, set } from 'firebase/database'

const CardAuthorization = (props) => {

    const [isSuperAdmin, setIsSuperAdmin] = useState(props.isSuperAdmin)
    const [isAdmin, setIsAdmin] = useState(props.isAdmin)


    function writeUserData() {
        set(ref(database, "users/" + props.uid), {
          admin: isAdmin,
          email: props.email,
          id: props.uid,
          superAdmin: isSuperAdmin
        });
    }

    return (
        <View style={styles.authorizationContainer}>
            <Text style={styles.email}>{props.email}</Text>
            <View style={styles.switchs}>
                <View style={styles.options}>
                    <Text>Super Admin</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isSuperAdmin ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {
                            setIsSuperAdmin(!isSuperAdmin)
                            writeUserData()
                        }}
                        value={props.isSuperAdmin}
                    >
                    </Switch>
                </View>
                <View style={styles.options}>
                    <Text>Admin</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isAdmin ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {
                            setIsAdmin(!isAdmin)
                            writeUserData()
                        }}
                        value={props.isAdmin}
                    />
                </View>
            </View>
        </View>
    )
}

export default CardAuthorization

const styles = StyleSheet.create({
    authorizationContainer:{
        alignItems:'center',
        padding: 10
    },
    options:{
        padding:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    email:{
        alignItems: 'center'
    },
    switchs:{
        paddingTop:5,
        width:"50%",
        justifyContent:"center",
        flexDirection: "row"
    }
})