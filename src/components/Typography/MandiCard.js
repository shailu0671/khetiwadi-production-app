import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Colors } from '../../constants';
import TouchableScale from 'react-native-touchable-scale';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MandiCard = ({
    navigation,
    mandi_name,
    city_name,
    views,
    image,
    add_date,
    id,
    item,
    nav
    // ...props


}) => {
    return (

        <TouchableScale
            onPress={nav}
        // onPress={() => navigation.navigate('MandiDetail')}
        >
            <View
                style={{
                    flexDirection: "row",
                    marginBottom: 10,
                    marginHorizontal: 10,
                    marginVertical: 10,
                    backgroundColor: Colors.white,
                    width: windowWidth / 1.7,
                    shadowColor: Colors.Gray[900],
                    shadowOffset: { width: -2, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 5,
                    height: windowHeight / 4.3,
                    borderRadius: 15,
                    elevation: 5
                }}
            >
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: 'center',
                        alignContent: 'center',
                        flex: 1
                    }}
                >
                    <Text style={{
                        fontSize: 35,
                        color: Colors.black,
                        fontWeight: 'bold'}}
                        >{mandi_name}</Text>
                    {/* <Text style={{
                        fontSize: 25,
                        color: Colors.white,
                        fontWeight: 'bold',


                    }}>{city_name}</Text> */}
                    <View style={{
                        backgroundColor: Colors.Pink[600],
                        marginTop: 10,
                        padding: 15,
                        borderRadius: 10,
                        shadowColor: '#171717',
                        shadowOffset: { width: -1, height: 1 },
                        shadowOpacity: 0.2,
                        shadowRadius: 4,
                        elevation: 5,
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: Colors.white,
                            fontWeight: 'bold',
                        }}>{views}</Text>
                    </View>
                </View>
            </View>
        </TouchableScale>
    )
};

export default MandiCard;
