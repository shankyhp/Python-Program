import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import LoginScreen from "./LoginScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
      setShowWelcome(true);
    }, 1000); // Show F logo for 1 second

    setTimeout(() => {
      setShowWelcome(false);
      setShowLogin(true);
    }, 3000); // Show welcome screen for 2 more seconds, then show LoginScreen
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require("../../assets/F-logo.jpg")}
          style={styles.Flogo}
        />
      </View>
    );
  }

  if (showWelcome) {
    return (
      <View style={styles.welcomeContainer}>
        <Image
          source={require("../../assets/bank-logo.png")}
          style={styles.splashLogo}
        />

        <Text style={styles.welcomeText}>Welcome to My Bank</Text>
      </View>
    );
  }

  return <LoginScreen />; // Load the LoginScreen component
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  Flogo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  splashLogo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  welcomeLogo: {
    marginTop: -80,
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  welcomeText: {
    marginTop: -80, // Move text up slightly
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
});

export default App;
