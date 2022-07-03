import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const HomeScreen = () => {
  const { userInfo, isLoading } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="#2D96F3" />}

      <Text style={styles.welcome}> Welcome {userInfo.user.name}</Text>

      <Button title="Logout" color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default HomeScreen;
