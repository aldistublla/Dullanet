import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-deck-swiper";
import UserCard from "../components/UserCard";
import { getOtherUsers } from "../data/localApi";

const { width } = Dimensions.get("window");

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      others: []
    };
  }

  componentDidMount() {
    const { user } = this.props.route.params;
    const others = getOtherUsers(user.id);
    this.setState({ user, others });
  }

  renderCard = (card) => <UserCard user={card} />;

  render() {
    const { user, others } = this.state;
    if (!user) return null;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hello, {user.name} 💖</Text>

        <View style={styles.swiperContainer}>
          {others.length > 0 ? (
            <Swiper
              cards={others}
              renderCard={this.renderCard}
              stackSize={3}
              backgroundColor="#fff0f5"
              cardVerticalMargin={20}
              animateCardOpacity
              onSwiped={(cardIndex) => console.log("Swiped", cardIndex)}
              onSwipedAll={() => console.log("No more users")}
            />
          ) : (
            <Text style={styles.noUsers}>No other users to show 😢</Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0f5",
    alignItems: "center",
    paddingTop: 40
  },
  header: {
    fontSize: 24,
    color: "#ff3366",
    marginBottom: 20
  },
  swiperContainer: {
    flex: 1,
    width: width
  },
  noUsers: {
    textAlign: "center",
    marginTop: 50,
    color: "#ff3366",
    fontSize: 18
  }
});
