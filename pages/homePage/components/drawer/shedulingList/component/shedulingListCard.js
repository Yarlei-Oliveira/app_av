import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ShedulingListCard = (props) => {
    
    return (
        <View style={styles.cardAgendadosContainer}>
            <View style={styles.cardAgendados}>
                <Text style={styles.textCardAgendados}>Local: {props.local}</Text>
                <Text style={styles.textCardAgendados}>Tipo de serviço: {props.service}</Text>
                <Text style={styles.textCardAgendados}>Marcado: {props.dataMarcada}</Text>
                <Text style={styles.textCardAgendados}>Retirar as: {props.horaDaRetirada}</Text>
            </View>
        </View>
    )
}

export default ShedulingListCard


const styles = StyleSheet.create({
    cardAgendadosContainer: {
        padding: 10,
        borderBottomColor: "black",
        borderBottomWidth: 0.8
    },
    textCardAgendados:{
        paddingBottom: 3
    }
})