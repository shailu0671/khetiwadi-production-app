import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import TextFileDesign from './TextFileDesign'


const Terms = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TextFileDesign
                heading={"Terms & Condition"}
                text={"This App belongs to farming and farming machinary. Created and Managed by khetiwadi development team. Content owned and updated by khetiwadi. Copyright © 2020 KHETIWADI. All Rights Reserved."}
            />
        </SafeAreaView>
    )
}

export default Terms