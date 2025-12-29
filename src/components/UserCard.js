import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default class UserCard extends Component {
  render() {
    const { name, age, bio, photo } = this.props.user;

    return (
      <View style={styles.card}>
        <Image source={photo} style={styles.photo} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}, {age}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffe6eb",
    borderRadius: 20,
    width: width * 0.85,
    height: width * 1.1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    overflow: "hidden"
  },
  photo: {
    width: "100%",
    height: "65%",
    resizeMode: "cover"
  },
  info: {
    padding: 15
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#b3003b"
  },
  bio: {
    marginTop: 10,
    fontSize: 16,
    color: "#800020"
  }
});
