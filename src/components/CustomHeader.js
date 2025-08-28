import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={{ width: 30 }} /> {/* Spacer for layout */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
  },
  back: {
    fontSize: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
