import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Color'

const TextFileDesign = ({
    heading,
    text,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.text}>{text}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        paddingHorizontal: 20,
        alignItems: 'center'

    },
    heading: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: '500',

    },
    text: {
        alignItems: 'center',
        fontSize: 19,
        marginBottom: 20,
        lineHeight: 28,
        color: Colors.Gray[500]

    }
})

export default TextFileDesign