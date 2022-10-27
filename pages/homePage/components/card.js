import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

export default function Card(props) {
    return (
        <View style={styles.container}>
            <ImageBackground
                imageStyle={[styles.imageBackgroundStyle, styles.container]}
                source={{ uri: props.imageUrl }}>
                <LinearGradient
                    colors={['#00000000', '#000000']}
                    style={[styles.gradiente, styles.container]}>
                    <View>
                        <Text style={styles.text}>{props.nameCard}</Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    gradiente: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
    },
    imageBackgroundStyle: {
        flex: 1,
    },
    text: {
        paddingLeft: 15,
        paddingBottom:10,
        fontSize: 25,
        color: "white",

    }

})