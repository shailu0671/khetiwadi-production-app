import React from "react";
import { View, Text, StyleSheet } from "react-native"
import { Colors } from "../../constants";


const Header = ({ HeaderTitle, Day }) => {
    return (
        <View style={{ justifyContent: 'flex-start' }} >
            <Text style={styles.date}>{Day}</Text>
            <Text style={styles.headingText}>{HeaderTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    date: {
        fontSize: 13,
        color: Colors.Zinc['400'],
        backgroundColor: Colors.white,
        fontWeight: '600',
        paddingLeft: 10,
        paddingTop: 28,
        textTransform: 'uppercase'
    },
    headingText: {
        fontSize: 34,
        color: Colors.Gray['900'],
        fontWeight: 'bold',
        paddingLeft: 10,
    }
})

export default Header