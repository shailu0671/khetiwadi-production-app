import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Image } from "react-native";
import { getCropList } from "../../api/mandi";

export default function CropScreen({ navigation }) {
    const [crops, setMandis] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCrops();
    }, []);

    const fetchCrops = async () => {
        try {
            const data = await getCropList();
            setMandis(Array.isArray(data) ? data : [data]); // handles both array and single object
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <ActivityIndicator style={styles.loader} size="large" />;

    return (
        <View style={styles.container}>
            <FlatList
                data={crops}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("CropDetail", { crop: item })}
                    >
                        {item.image ? (
                            <Image
                                source={{ uri: `https://khetiwadi.com${item.image}` }}
                                style={styles.image}
                            />
                        ) : null}
                        <View style={{ flex: 1 }}>
                            <Text style={styles.title}>{item.crop_name}</Text>
                            <Text style={styles.subtitle}>{item.slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#fff" },
    loader: { flex: 1, justifyContent: "center", alignItems: "center" },
    card: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        marginBottom: 12,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
        elevation: 2,
    },
    image: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
    title: { fontSize: 18, fontWeight: "bold" },
    subtitle: { fontSize: 14, color: "#666" },
});
