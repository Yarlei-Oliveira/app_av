import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import { database } from '../../../../../../firebase'
import { ref, set } from 'firebase/database'

const CardAuthorization = (props) => {

    const [isSuperAdmin, setIsSuperAdmin] = useState(props.isSuperAdmin)
    const [isAdmin, setIsAdmin] = useState(props.isAdmin)
    

    function writeUserData(boolAdmin, boolSuperAdmin) {
        //console.log("passo por aqui  " + boolAdmin + " . " + boolSuperAdmin)
        set(ref(database, "users/" + props.uid), {
          admin: boolAdmin,
          email: props.email,
          id: props.uid,
          superAdmin: boolSuperAdmin
        });
        setIsSuperAdmin(boolSuperAdmin)
        setIsAdmin(boolAdmin)
    }

    return (
        <View style={styles.authorizationContainer}>
            <Text style={styles.email}>{props.email}</Text>
            <View style={styles.switchs}>
                <View style={styles.options}>
                    <Text>Super Admin</Text>
                    <Switch
                        key={1}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => writeUserData(isAdmin, !isSuperAdmin)}
                        value={isSuperAdmin}
                    >
                    </Switch>
                </View>
                <View style={styles.options}>
                    <Text>Admin</Text>
                    <Switch
                        key={2}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => writeUserData(!isAdmin, isSuperAdmin)}
                        value={isAdmin}
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