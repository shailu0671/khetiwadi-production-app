import moment from "moment";
import { View, Text, ScrollView, Image, StyleSheet, useWindowDimensions, ActivityIndicator } from "react-native";
import { formatViews } from "../../utils/formatViews";
import RenderHTML from "react-native-render-html";

export default function BlogDetailScreen({ route }) {
    const { blog } = route.params;
    const { width } = useWindowDimensions();


    return (
        <ScrollView style={styles.container}>
            {blog.image ? (
                <Image
                    source={{ uri: `https://khetiwadi.com${blog.image}` }}
                    style={styles.image}
                />
            ) : null}

            <Text style={styles.title}>{blog.blog_title}</Text>
            <Text style={styles.meta}>Views: {formatViews(blog.views)} | Added: {moment(blog.timestamp).format('DD MMMM YYYY')}</Text>


            <View style={styles.paragraph}>
                <RenderHTML contentWidth={width} source={{ html: blog.app_desc }} />
            </View>
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
