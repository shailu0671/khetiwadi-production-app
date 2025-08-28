import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import TextFileDesign from './TextFileDesign'


const Privacy = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TextFileDesign
                heading={"Privacy"}
                text={"We Don't Need any personal user information to run this app. this is general purpose app"}

            />
        </SafeAreaView>
    )
}

export default Privacy