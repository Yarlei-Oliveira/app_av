import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'

const NewOficina = () => {
    const [endereco, setEndereco] = useState("")
    const [servicos, setServicos] = useState([])


     function adicionarOficina(){
        console.log("vai da tudo certo boy");
    }

  return (
    <View style={styles.NewOficinaContainer}>
        <KeyboardAvoidingView>
            <View
            style={styles.enderecoViewContainer}>
                <TextInput 
                multiline={true}
                placeholder='Endereco'
                style={styles.textInputEndereco}
                onChangeText={(text)=>setEndereco(text)}
                value={endereco}
                />
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.adicionarService}>
                    <TextInput 
                    placeholder='Servico'
                    style={styles.servicoTextInput}
                    />
                    <TextInput 
                    placeholder='Preco'
                    style={styles.enderecoViewContainer}
                    />
                </View>
                <View>
                    <TouchableHighlight 
                    onPress={adicionarOficina()}>
                        <Text style={styles.buttonAdd}>Adicionar</Text>
                    </TouchableHighlight>
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
        width: "100%",
        flex: 1
    },
    enderecoViewContainer:{
        height: 55,
        padding:10,
        borderColor: "black",
        borderWidth: 1,
    },
    bottomContainer:{
        paddingTop:10,
        justifyContent: 'space-around',
        alignItems:'center' 
        
    },
    adicionarEretirar:{
        padding:10,
        fontSize: 25
    },
    adicionarService:{
        flexDirection: 'row',
        width: "100%"
    },
    buttonAdd:{
        padding: 10,
        backgroundColor: "grey",
        borderRadius: 10,
        color: "white"
    }
})