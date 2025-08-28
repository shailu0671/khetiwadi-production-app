import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import TextFileDesign from './TextFileDesign'


const Disclaimer = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TextFileDesign
                heading={"Disclaimer"}
                text={"All the information on this APP – is published in good faith and for general information purpose only. We do not guarantee 100% of all the information given। Founded in 2020 by Khetiwadi.com."}
            />
        </SafeAreaView>
    )
}

export default Disclaimer