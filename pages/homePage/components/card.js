import { Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Card(props) {
    return (
        <linearGradient>
        colors={['rgba(0,0,0,0.8)', 'transparent']}
            <Image
                style={styles.imageStyle}
                source={{ uri: props.imageUrl }}
            />
        </linearGradient>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        backgroundColor: "black"
    },
})