import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomHeader({ title, navigation }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={30} color="#ff1493" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { 
    width: '90%', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 40, 
    marginBottom: 20 
  },
  title: { fontSize: 36, fontWeight: 'bold', color: '#ff1493' },
});
