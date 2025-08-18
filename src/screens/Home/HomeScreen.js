import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>🌾 Khetiwadi App</Text>
                <Text style={styles.subtitle}>Your mandi rates, crops & more!</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Mandis")}
            >
                <Text style={styles.buttonText}>View Mandi Bhav</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, styles.secondaryButton]}
                onPress={() => navigation.navigate("Crops")}
            >
                <Text style={styles.secondaryButtonText}>Explore Crops</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8fff4",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    header: {
        marginBottom: 40,
        alignItems: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#2e7d32",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#555",
        textAlign: "center",
    },
    button: {
        backgroundColor: "#4CAF50",
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 10,
        width: "80%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    secondaryButton: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#4CAF50",
    },
    secondaryButtonText: {
        color: "#4CAF50",
        fontSize: 18,
        fontWeight: "bold",
    },
});
