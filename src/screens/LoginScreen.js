import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { login } from "../data/localApi";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleLogin = () => {
    const user = login(this.state.username, this.state.password);
    if (user) {
      // Navigate to Home and pass the user object
      this.props.navigation.replace("Home", { user });
    } else {
      Alert.alert("Login Failed", "Invalid credentials");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>💖 Dullanet</Text>

        <TextInput
          placeholder="Username"
          style={styles.input}
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          onChangeText={password => this.setState({ password })}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6eb",
    justifyContent: "center",
    padding: 20
  },
  title: {
    fontSize: 36,
    textAlign: "center",
    color: "#ff3366",
    marginBottom: 40
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },
  button: {
    backgroundColor: "#ff3366",
    padding: 15,
    borderRadius: 10
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  }
});
