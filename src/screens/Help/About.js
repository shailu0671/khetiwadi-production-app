import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import TextFileDesign from './TextFileDesign'


const About = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TextFileDesign
                heading={"About Us"}
                text={" Welcome to Khetiwadi,नमस्कार khetiwadi app पर आपका स्वागत है  इस APP के माध्यम से आपको प्रतिदिन  मंडी भाव की जानकारी उपलब्ध होगी  नीमच जिला  मंदसौर जिला व आसपास के अन्य जिलो के मंडी भाव भी उपलब्ध होंगे व खेती की नयी फ़सलों के बारे में जानकारी तथा खेती में बड़ती तकनीको के बारे में जानकारी तथा सरकार द्वारा किसनो के लिए चलायी जा रही सभी योजनाओं से सम्बंधित जानकारी प्राप्त होगी।"}
            />
        </SafeAreaView>
    )
}

export default About