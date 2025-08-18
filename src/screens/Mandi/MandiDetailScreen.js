import moment from "moment";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet, useWindowDimensions, ActivityIndicator } from "react-native";
import { getMandiBhav } from "../../api/mandi";
import { formatViews } from "../../utils/formatViews";

export default function MandiDetailScreen({ route }) {
    const { mandi } = route.params;
    const { width } = useWindowDimensions();
    const [bhavList, setBhavList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getMandiBhav(mandi.slug); // pass slug to API
                // console.log("Bhav API:", response);

                if (Array.isArray(response)) {
                    setBhavList(response);
                } else {
                    setBhavList([]); // safety
                }
            } catch (error) {
                console.error("Error fetching mandi bhav:", error);
                setBhavList([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [mandi]);

    return (
        <ScrollView style={styles.container}>
            {mandi.image ? (
                <Image
                    source={{ uri: `https://khetiwadi.com${mandi.image}` }}
                    style={styles.image}
                />
            ) : null}

            <Text style={styles.title}>{mandi.mandi_name}</Text>
            <Text style={styles.subtitle}>{mandi.city_name}</Text>
            <Text style={styles.meta}>Views: {formatViews(mandi.views)} | Added: {moment(mandi.add_date).format('DD MMMM YYYY')}</Text>

            {mandi.paragraph?.map((para, index) => (
                <View key={index} style={styles.paragraph}>
                    <Text style={styles.heading}>{para.heading}</Text>
                    <Text style={styles.body}>{para.body}</Text>
                </View>
            ))}

            {/* Bhav List */}
            <Text style={styles.sectionTitle}>🌾 आज के भाव</Text>

            {loading ? (
                <ActivityIndicator size="large" color="#4CAF50" style={{ marginTop: 20 }} />
            ) : (
                bhavList.map((item) => (
                    <View key={item.id} style={styles.bhavCard}>
                        <View style={styles.row}>
                            {/* Left Column */}
                            <View style={styles.leftCol}>
                                <Text style={styles.cropHindi}>{item.crop_name}</Text>
                                <Text style={styles.cropEnglish}>{item.crop_name_english}</Text>
                            </View>

                            {/* Right Column */}
                            <View style={styles.rightCol}>
                                <Text style={styles.maxRate}>₹{item.max_rate}</Text>
                                <Text style={styles.minRate}>Min: ₹{item.min_rate}</Text>
                            </View>
                        </View>

                        {/* Timestamp below full row */}
                        {/* <Text style={styles.timestamp}>
                            Updated: {moment(item.timestamp).format("DD MMM YYYY, hh:mm A")}
                        </Text> */}
                    </View>
                ))
            )}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#fff" },
    image: { width: "100%", height: 250, borderRadius: 8, marginBottom: 16, objectFit: "fill" },
    title: { fontSize: 22, fontWeight: "bold" },
    subtitle: { fontSize: 16, color: "#666", marginBottom: 8 },
    meta: { fontSize: 14, color: "#363636ff", marginBottom: 12, fontWeight: "600" },
    paragraph: { marginTop: 12 },
    heading: { fontSize: 18, fontWeight: "bold" },
    body: { fontSize: 16, color: "#444" },

    bhavCard: {
        backgroundColor: "#fff",
        padding: 12,
        marginVertical: 6,
        marginHorizontal: 12,
        borderRadius: 10,
        elevation: 2, // shadow for Android
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    leftCol: {
        flex: 1,
    },
    cropHindi: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    cropEnglish: {
        fontSize: 14,
        color: "#777",
        marginTop: 2,
    },
    rightCol: {
        alignItems: "flex-end",
    },
    maxRate: {
        fontSize: 22,
        fontWeight: "bold",
        paddingHorizontal: 12,
        paddingVertical: 4,

    },
    minRate: {
        fontSize: 13,
        color: "#fff",
        backgroundColor: "#E53935",
        marginTop: 4,
        borderRadius: 8,
        overflow: "hidden",
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    timestamp: {
        marginTop: 8,
        fontSize: 12,
        color: "#999",
        textAlign: "right",
    },
});
