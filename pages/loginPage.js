import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

var user = "";

const LoginPage = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    //Registrar
    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                user = userCredentials.user;
                console.log(user.email);
            })
            .catch((error) =>
                alert(error.message),
                console.log(error.message))
    }
    //Login

    const handleSignin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                alert(error.message)
                console.log(error.message)
            });
    }
    //go Home

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.navigate("Home")
            } else {
                navigation.navigate("Login")
            }
        })
        return unsubscribe;
    }, [])

    return (
        <KeyboardAvoidingView
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={styles.textHeader}>
                    Login
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Registrar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignin}
                    style={styles.button}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export { user }

export default LoginPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        width: "80%",
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 15
    },
    buttonContainer: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "space-between",
        marginTop: 40,

    },
    button: {
        width: "45%",
        backgroundColor: "#001f36",
        alignItems: "center",
        borderRadius: 15,
        padding: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: '400',
        fontSize: 15,
    },
    buttonOutline: {
        backgroundColor: "#1c5560",
        alignItems: "center",
    },
    header: {
        width: "75%",
    },
    textHeader: {
        fontWeight: '600',
        fontSize: 18,
    },

})