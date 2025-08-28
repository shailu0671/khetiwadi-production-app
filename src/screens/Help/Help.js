import React from 'react'
import { View, Text, SafeAreaView, Share, StyleSheet, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import * as WebBrowser from "expo-web-browser";
import TouchableScale from 'react-native-touchable-scale';
import Header from '../../components/Typography/Header';
import { Colors } from '../../constants';

const Help = ({ navigation }) => {

    const Icon = ({ color }) => {
        return (
            <>
                <AntDesign
                    name="infocirlceo"
                    style={{ marginHorizontal: 10 }}
                    size={24}
                    color={color}
                />
            </>

        )
    }
    const ArrowIcon = ({ color }) => {
        return (
            <>
                <AntDesign
                    name="arrowright"
                    style={{ marginHorizontal: 10 }}
                    size={24}
                    color={color}
                />


            </>

        )
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView>
                <View style={{ marginLeft: 16 }}>
                    {/* <Header HeaderTitle={'Help'} Day={moment(new Date()).format("dddd DD MMMM")} /> */}
                    <Header HeaderTitle={'Help'} />
                </View>
                <View
                    style={{
                        // flex: 1,
                        backgroundColor: "#fff",
                        marginTop: 20,
                        paddingVertical: 20,
                    }}
                >
                    <TouchableScale
                        onPress={() => ContactUs()}
                        style={[styles.container, { backgroundColor: Colors.green }]}
                    >
                        <Icon color={"#fff"} />
                        <Text style={[styles.text, { color: '#fff' }]} >
                            Contact us
                        </Text>
                        <ArrowIcon color={"#fff"} />
                    </TouchableScale>
                    <TouchableScale
                        onPress={() => navigation.navigate("About")}
                        style={[styles.container, { backgroundColor: '#f3f3f3' }]}
                    >
                        <Icon />
                        <Text style={styles.text} >
                            About
                        </Text>
                        <ArrowIcon />
                    </TouchableScale>
                    <TouchableScale
                        onPress={() => navigation.navigate("Terms")}
                        style={[styles.container, { backgroundColor: '#f3f3f3' }]}
                    >
                        <Icon />
                        <Text style={styles.text} >
                            Terms & Conditions
                        </Text>
                        <ArrowIcon />
                    </TouchableScale>
                    <TouchableScale
                        onPress={() => navigation.navigate("Privacy")}
                        style={[styles.container, { backgroundColor: '#f3f3f3' }]}
                    >
                        <Icon />
                        <Text style={styles.text} >
                            Privacy Policy
                        </Text>
                        <ArrowIcon />
                    </TouchableScale>
                    <TouchableScale
                        onPress={() => navigation.navigate("Disclaimer")}
                        style={[styles.container, { backgroundColor: '#f3f3f3' }]}
                    >
                        <Icon />
                        <Text style={styles.text} >
                            Disclaimer
                        </Text>
                        <ArrowIcon />
                    </TouchableScale>
                    <TouchableScale
                        onPress={() => onShare()}
                        style={[styles.container, { backgroundColor: Colors.warning }]}
                    >
                        <Icon />
                        <Text style={styles.text} >
                            Share
                        </Text>
                        <ArrowIcon />
                    </TouchableScale>
                    <TouchableScale style={[{
                        backgroundColor: '#f3f3f3', padding: 20, marginHorizontal: 20,
                        paddingVertical: 20,
                        borderRadius: 10,
                        marginVertical: 5, justifyContent: 'center', alignItems: 'center'
                    }]}>

                        {/* update version on 30 April 2022 from 2.0.14 t0 2.0.15 */}
                        {/* update version on 19 August 2025 from 2.0.15 t0 3.0.0 */}
                        {/* update version on after 19 August 2025 from 3..0.0 t0 3.0.1 */}
                        <Text style={styles.text} >
                            Version 3.0.1
                        </Text>
                    </TouchableScale>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "green",
        marginHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,
        marginVertical: 5,
    },
    text: {
        alignSelf: "center",
        flex: 1,
        // fontSize: win.height / 65,
        fontSize: 15,
        fontWeight: "500",
        color: "#000",
    }
})


export default Help;



const onShare = async () => {
    try {
        const result = await Share.share({
            message:
                "खेती से जुड़ी जानकारी तथा डेली मंडी भाव जानने के लिए डाउनलोड करें khetiwadi App  https://play.google.com/store/apps/details?id=com.khetiwadiMandiBhav.app " +
                " या Visit करे हमारी website https://khetiwadi.com पर ",
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        // alert(error.message);
    }
};

const ContactUs = () => {
    WebBrowser.openBrowserAsync("https://khetiwadi.com/contact");
};