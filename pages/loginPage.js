import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, database } from '../firebase'
import { ref, set } from "firebase/database";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

var user = "";

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isRegister, setIsRegister] = useState(false)

    function writeUserData(user) {
        set(ref(database, "users/" + user.uid + "/"), {
            email: user.email,
            superAdmin: false,
            admin: false,
        });
    }

    //Registrar
    const handleSignUp = () => {
        if (email === "" || email === null || password === "" || password === null) return alert("Algum dos campos esta nulo")
        if (password !== confirmPassword) return alert("Senhas não batem")
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                user = userCredentials.user;
                console.log(user);
                writeUserData(user)
            })
            .catch((e) => {
                alert(e.message)
                console.log(e.message)
            }
            )
    }
    //Login

    const handleSignin = () => {
        if (email === "" || email === null || password === "" || password === null) return alert("Algum dos campos esta nulo")
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
                navigation.navigate("Root")
            } else {
                navigation.navigate("Login")
            }
        })
        return unsubscribe;
    }, [])

    return (
        <KeyboardAvoidingView
            style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>
                    {isRegister ? "Registrar" : "Login"}
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
                    placeholder="Senha"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                {isRegister && <TextInput
                    placeholder="Confirmar senha"
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />}
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => setIsRegister(!isRegister)}
                    style={[styles.button, styles.buttonOutline]}>
                    <Text
                        style={styles.buttonText}>
                        {isRegister ? "Login" : "Cadastrar"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => isRegister ? handleSignUp() : handleSignin()}
                    style={styles.button}>
                    <Text
                        style={styles.buttonText}>
                        {isRegister ? "Registrar" : "Entrar"}
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