import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'

const NewOficina = () => {
    const [endereco, setEndereco] = useState("")
    const [servicos, setServicos] = useState([])
  return (
    <View style={styles.NewOficinaContainer}>
        <KeyboardAvoidingView 
        style={styles.enderecoViewContainer}>
            <View>
                <TextInput 
                multiline={true}
                placeholder='Endereco'
                style={styles.textInputEndereco}
                onChangeText={(text)=>setEndereco(text)}
                value={endereco}
                />
            </View>
            <View style={styles.bottomContainer}>
                <View>
                    <Text>Lista de services</Text>
                </View>
                <View>
                    <Button 
                    title='Adicionar'
                    style={styles.buttonAdd}
                    />
                </View>
            </View>
            
        </KeyboardAvoidingView>
     
    </View>
  )
}

export default NewOficina

const styles = StyleSheet.create({
    NewOficinaContainer:{
        padding: 10,
        width:"100%",
        height:"100%"
    },
    enderecoViewContainer:{
        flex: 0.04,
        height: 50,
        padding:10,
        borderColor: "black",
        borderWidth: 1,
    },
    bottomContainer:{
        paddingTop:1,
        flexDirection:"row"
    },
})