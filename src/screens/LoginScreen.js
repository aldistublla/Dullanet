import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { users } from '../data/users';

export default function LoginScreen({ setLoggedInUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = users.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      setLoggedInUser(user);
    } else {
      Alert.alert('Login Failed', 'Invalid email or password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to Dullanet</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} color="#ff1493" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff0f5' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#ff1493' },
  input: { width: '100%', borderWidth: 1, borderColor: '#ff69b4', borderRadius: 10, padding: 10, marginBottom: 15 }
});
