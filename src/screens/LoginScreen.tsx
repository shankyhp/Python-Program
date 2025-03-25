import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TextInput as TextInputType,
} from "react-native";

const LoginScreen: React.FC = () => {
  const [mpin, setMpin] = useState<string>("");
  const inputRef = useRef<TextInputType>(null);

  const handleDotPress = () => {
    inputRef.current?.focus();
  };

  const handleChange = (text: string) => {
    // Allow only numeric values and limit to 4 digits
    const newText = text.replace(/[^0-9]/g, "").slice(0, 4);
    setMpin(newText);
  };

  return (
    <View style={styles.container}>
      {/* Top section with logo and welcome text */}
      <View style={styles.topSection}>
        <Image
          source={require("../../assets/bank-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>Welcome to My Bank</Text>
      </View>
      {/* Center section for MPIN login */}
      <View style={styles.centerSection}>
        <Text style={styles.loginText}>Login using Mpin</Text>
        <TouchableOpacity style={styles.dotsContainer} onPress={handleDotPress}>
          {Array.from({ length: 4 }).map((_, index) => (
            <View key={index} style={styles.dot}>
              {/* Show a filled dot if a digit has been entered */}
              {mpin.length > index && <View style={styles.filledDot} />}
            </View>
          ))}
        </TouchableOpacity>
        {/* Hidden TextInput to trigger numeric keyboard */}
        <TextInput
          ref={inputRef}
          style={styles.hiddenInput}
          keyboardType="numeric"
          maxLength={4}
          value={mpin}
          onChangeText={handleChange}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6", // light blue background
    paddingTop: 50,
  },
  topSection: {
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  welcomeText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  centerSection: {
    flex: 1,
    alignItems: "center",
  },
  loginText: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
    marginBottom: 20,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  filledDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#000",
  },
  hiddenInput: {
    height: 0,
    width: 0,
    opacity: 0,
  },
});

export default LoginScreen;
