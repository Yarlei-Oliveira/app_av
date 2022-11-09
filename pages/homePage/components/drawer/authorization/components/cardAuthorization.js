import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'

const CardAuthorization = (props) => {

    const [isSuperAdminEnable, setIsSuperAdminEnable] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    const toggleSuperAdmin = () => setIsSuperAdminEnable(!isSuperAdminEnable)

    const toggleAdmin = () => setIsAdmin(!isAdmin)

    return (
        <View>
            <Text>{props.email}</Text>
            <View>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isSuperAdminEnable ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSuperAdmin()}
                    value={isSuperAdminEnable}
                />
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isAdmin ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleAdmin()}
                    value={isAdmin}
                />
            </View>
        </View>
    )
}

export default CardAuthorization

const styles = StyleSheet.create({})